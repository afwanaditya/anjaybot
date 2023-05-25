const axios = require('axios')
const cheerio = require("cheerio");
 
function kusonimek(q) {
  query = encodeURIComponent(q);
  return new Promise(async function (resolve, reject) {
    let res = await axios.get("https://kusonime.com/?s=" + query);
 
    const $ = await cheerio.load(res.data);
    const linkanime1 = await $('div[class="content"] > h2 > a');
    let link1 = await linkanime1.attr("href");
    if (!link1)
      return reject({ status: false, message: `Anime ${q} Tidak Ditemukan!` });
    let _res = await axios.get(link1);
    let links360 = await [];
    let links480 = await [];
    let links720 = await [];
    let links1080 = await [];
    const $$ = await cheerio.load(_res.data);
    const rootContent = $$('div[class="venser"]');
    const rootBody = rootContent.find('div[class="lexot"]');
    const rootInfo = rootBody.children('div[class="info"]');
 
    await $$(".dlbod > .smokeddl > .smokeurl > a").each(
      async (index, value) => {
        let link360 = await $$(value).attr("href");
        await links360.push({ link360 });
      }
    );
 
    await $$(".dlbod > .smokeddl > .smokeurl + .smokeurl > a").each(
      async (index, value) => {
        let link480 = await $$(value).attr("href");
        await links480.push({ link480 });
      }
    );
 
    await $$(".dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl > a").each(
      async (index, value) => {
        let link720 = await $$(value).attr("href");
        await links720.push({ link720 });
      }
    );
 
    await $$(
      ".dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl + .smokeurl > a"
    ).each(async (index, value) => {
      let link1080 = await $$(value).attr("href");
      await links1080.push({ link1080 });
    });
 
    let judul = await $$('div[class="post-thumb"] > h1[class="jdlz"]').text();
    let genre = await $$('div[class="info"] > p:nth-child(2)').text();
    let totaleps = await $$('div[class="info"] > p:nth-child(7)').text();
    let durasi = await $$('div[class="info"] > p:nth-child(9)').text();
    let tglrilis = await $$('div[class="info"] > p:nth-child(10)').text();
    let result360 = await JSON.stringify(links360)
      .replace(/,/g, "\n")
      .replace(/"/g, "")
      .replace(/link360/g, "")
      .replace(/{/g, "")
      .replace(/}/g, "")
      .replace(/\[/g, "")
      .replace(/\]/g, "");
    let result480 = await JSON.stringify(links480)
      .replace(/,/g, "\n")
      .replace(/"/g, "")
      .replace(/link480/g, "")
      .replace(/{/g, "")
      .replace(/}/g, "")
      .replace(/\[/g, "")
      .replace(/\]/g, "");
    let result720 = await JSON.stringify(links720)
      .replace(/,/g, "\n")
      .replace(/"/g, "")
      .replace(/link720/g, "")
      .replace(/{/g, "")
      .replace(/}/g, "")
      .replace(/\[/g, "")
      .replace(/\]/g, "");
    let result1080 = await JSON.stringify(links1080)
      .replace(/,/g, "\n")
      .replace(/"/g, "")
      .replace(/link1080/g, "")
      .replace(/{/g, "")
      .replace(/}/g, "")
      .replace(/\[/g, "")
      .replace(/\]/g, "");
    let thumb = $$('div[class="post-thumb"] > img').attr("src");
    let desk = $$('div[class="venser"]')
      .find('div[class="lexot"]')
      .children("p")
      .first()
      .text();
    let type = $$(rootInfo.children("p").get(4)).text().split(":")[1].trim();
    let rate = $$(rootInfo.children("p").get(7)).text().split(":")[1].trim();
    let status = $$(rootInfo.children("p").get(5)).text().split(":")[1].trim();
    let producer = $$(rootInfo.children("p").get(3))
      .text()
      .split(":")[1]
      .trim();
 
    resolve({
      status: _res.status,
      creator: "dandisubhani_",
      result: {
        judul,
        thumb,
        desk,
        genre: genre.split(": ")[1],
        status,
        produser: producer,
        rate,
        type,
        link: link1,
        total_eps: totaleps.split(": ")[1],
        durasi: durasi.split(": ")[1],
        tgl_rilis: tglrilis.split(": ")[1],
        result: {
          360: [
            ...new Set(
              result360
                .replace(/:/g, "")
                .replace(/https\/\//g, "https://")
                .split("\n")
            ),
          ],
          480: [
            ...new Set(
              result480
                .replace(/:/g, "")
                .replace(/https\/\//g, "https://")
                .split("\n")
            ),
          ],
          720: [
            ...new Set(
              result720
                .replace(/:/g, "")
                .replace(/https\/\//g, "https://")
                .split("\n")
            ),
          ],
          1080: [
            ...new Set(
              result1080
                .replace(/:/g, "")
                .replace(/https\/\//g, "https://")
                .split("\n")
            ),
          ],
        },
      },
    });
  });
}

const author = 'reco : dandisubhan_'
class neonime{
	static search = async(query, page = 1) => {
		return new Promise(async(resolve) => {
			try{
				const {data} = await axios.get(`https://neonime.watch/page/${page}/?s=${query}`)
				const $ = cheerio.load(data)
				const result = []
				$('#contenedor').find('div.item_1.items > div').each(function(){
					result.push({
						title: $(this).find('a > div > span').text(),
						episode: $(this).find('div.fixyear > h2').text(),
						url: $(this).find('a').attr('href')
					})
				})
				const filter = result.filter(p => p.title && p.episode.includes('Episode'))
				resolve(filter != '' ? {
					status: true,
					author,
					query,
					page,
					result: filter
				} : {
					status: false,
					author,
					query,
					page,
					message: 'not found'
				})
			}catch(e){
				resolve({
					status: 404,
					query,
					page,
					message: 'Page not found!'
				})
			}
		})
	}
	static ongoing = async(page = 1) => {
		return new Promise((resolve) => {
			if(!page) page = 1
			axios.get(`https://neonime.watch/episode/page/${page}/`).then(({data}) => {
				const $ = cheerio.load(data)
				const result = []
				$('#episodes > table > tbody > tr').each(function(){
					let episode = $(this).find('td.bb > a > span').text().trim()
					result.push({
						title: $(this).find('td.bb > a').text().split(episode)[0].trim(),
						episode,
						upload_date: $(this).find('td.dd').text(),
						url: $(this).find('td.bb > a').attr('href')
					})
				})
				resolve(result != '' ? {
					status: true,
					author,
					page,
					result: result
				} : {
					status: false
				})
			}).catch(e => resolve({status: false, message: 'unknown error'}))
		})
	}
	static getData = async(url) => {
		return new Promise(async(resolve) => {
			const {data} = await axios.get(url)
			const $ = cheerio.load(data)
			const result = {}
			$('#info > div').each(function(){
				let param = $(this).find('b').text().replace(/ /g, '_').toLowerCase()
				if(param) result[param] = $(this).find('span').text()
			})
			result.download = {}
			$('#series > div.ladoB > div.central > div > ul > ul').each(function(){
				$(this).find('li').each(function(a, b){
					$(b).find('a').each(function(){
						let name = $(b).find('label').text().replace(/ /g, '_').toLowerCase().trim()
						if(Object.keys(result.download).length <= 10) result.download[name] ? result.download[name] : result.download[name] = {name: $(b).find('label').text()}
						result.download[name][$(this).text().toLowerCase().trim()] = $(this).attr('href')
					})
				})
			})
			resolve(result)
		})
	}
}
class otakudesu{
	static search = async(query) => {
		return new Promise((resolve) => {
			axios.get(`https://otakudesu.watch/?s=${query}&post_type=anime`).then(({data}) => {
				const $ = cheerio.load(data)
				const result = []
				$('#venkonten > div > div.venser > div > div > ul > li').each(function(){
					result.push({
						title: $(this).find('h2 > a').text(),
						url : $(this).find('h2 > a').attr('href')
					})
				})
				resolve(result != '' ? {status: true, query, result: result} : {status: false, message: 'anime not found'})
			}).catch(e => resolve({status: 404, message: 'page not found'}))
		})
	}
	static getData = async(url) => {
		return new Promise((resolve) => {
			axios.get(url).then(({data}) => {
				const $ = cheerio.load(data)
				const result = {}
				$('#venkonten > div.venser > div.fotoanime > div.infozin > div > p').each(function(){
					result[$(this).find('span').text().split(':')[0].toLowerCase().replace(/ /g, '_')] = $(this).find('span').text().split(':')[1].trim()
				})
				result.episode = []
				$('#venkonten > div.venser > div:nth-child(8) > ul > li').each(function(){
					result.episode.push({
						title: $(this).find('span:nth-child(1) > a').text(),
						url: $(this).find('span:nth-child(1) > a').attr('href')
					})
				})
				resolve(result.judul ? {
					status: true,
					...result
				} : {
					status: false,
					message: 'episode not found'
				})
			}).catch(e => resolve({status: false, message: 'error'}))
		})
	}
	static download = async(url) => {
		return new Promise((resolve) => {
			axios.get(url).then(({data}) => {
				const $ = cheerio.load(data)
				const result = {}
				result.title = $('#venkonten > div.venser > div.venutama > div.download > h4').text()
				result.download = {}
				$('#venkonten > div.venser > div.venutama > div.download > ul > li').each(function(a, b){
					let quality = $(b).find('strong').text().split(' ').find(s => s.endsWith('p'))
					result.download['q_' + quality] = {}
					$(b).find('a').each(function(){
						result.download['q_' + quality].name ? result.download['q_' + quality] : result.download['q_' + quality].name = quality
						result.download['q_' + quality][$(this).text().toLowerCase().trim()] = $(this).attr('href')
					})
				})
				resolve(result)
			}).catch(e => console.log(e))
		})
	}
}
module.exports = {
kusonimek,
	neonime,
	otakudesu
}