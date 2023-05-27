exports.run = {
   usage: ['style'],
   use: 'text',
   category: 'random text',
   async: async (m, {
      client,
      text,
      command
   }) => {
      try {
      if (!text) return client.reply(m.chat, '*Example* : .style halo', m)
      teks = await styletext(text)
      let tek = `*Style From* : ${text}\n\n`
      teks.map(async v => {
      tek += `*${v.name}* : ${v.result}\n\n`
      })
      tek += global.footer
      client.reply(m.chat, tek, m)
      } catch (e) {
         console.log(e)
         client.reply(m.chat, String(e), m)
      }
   },
   limit: true
}

const axios = require('axios')
const cheerio = require('cheerio')

function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}