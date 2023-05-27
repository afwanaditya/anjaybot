exports.run = {
   usage: ['whatanime', 'whatmusic'],
   use: 'reply foto or video',
   category: 'searching',
   async: async (m, {
      client,
      command
   }) => {
      try {
         if (command == 'whatanime') {
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            let img = await client.downloadMediaMessage(q)
            if (!/image/.test(type)) return client.reply(m.chat, Func.texted('bold', `Reply foto dengan perintah .whatanime`), m)
            let old = new Date()
            client.reply(m.chat, global.status.wait, m)
            let image = await Func.uploadImage(img)
            let json = await scrap.whatanime(image)
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
            let caption = `*W H A T  A N I M E*\n\n`
            caption += '	◦  *Judul* : ' + json.data.filename.replace(/[.]mp4/gi,'') + '\n'
            caption += '	◦  *Episode* : ' + (json.data.episode ||  1) + '\n'
            caption += '	◦  *Dari* : ' + json.data.from + '\n'
            caption += '	◦  *To* : ' + json.data.to + '\n'
            caption += '	◦  *Similarity* : ' + json.data.similarity + '\n'
            caption += '	◦  *Fetching* : ' + ((new Date - old) * 1) + 's\n\n'
            caption += global.footer
            client.sendFile(m.chat, json.data.image, 'image.jpg', caption, m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, Func.texted('bold', `Reply foto dengan perintah .whatanime`), m)
            let img = await q.download()
            if (!img) return client.reply(m.chat, Func.texted('bold', `Berikan caption atau reply foto dengan perintah .whatanime`), m)
            let old = new Date()
            client.reply(m.chat, global.status.wait, m)
            let image = await Func.uploadImage(img)
            let json = await scrap.whatanime(image)
            let caption = `*W H A T A N I M E*\n\n`
            caption += '	◦  *Judul* : ' + json.data.filename.replace(/[.]mp4/gi,'') + '\n'
            caption += '	◦  *Episode* : ' + (json.data.episode || 1) + '\n'
            caption += '	◦  *Dari* : ' + json.data.from + '\n'
            caption += '	◦  *To* : ' + json.data.to + '\n'
            caption += '	◦  *Similarity* : ' + json.data.similarity + '\n'
            caption += '	◦  *Fetching* : ' + ((new Date - old) * 1) + 's\n\n'
            caption += global.footer
            client.sendFile(m.chat, json.data.image, 'image.jpg', caption, m)
         }
         } else if (command == 'whatmusic') {       
    let sp = '◦'
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (!/video|audio/.test(mime)) return client.reply(m.chat, `*Reply audio atau video dengan caption . whatmusic.*`, m)
	if (/video|audio/.test(mime)) {
		let buffer = await q.download()
	    client.reply(m.chat, global.status.wait, m)
		let { status, metadata } = await acr.identify(buffer)
		if (status.code !== 0) return client.reply(m.chat, status.msg, m)
		let { title, artists, album, genres, release_date } = metadata.music[0]
		let txt = '*W H A T  M U S I C*\n\n'
		txt += `  ${sp}  *Title* : ${title}\n`
		txt += `  ${sp}  *Artists* : ${artists.map(v => v.name)}\n`
		txt += `  ${sp}  *Album* : ${album.name}\n`
		txt += `  ${sp}  *Genres* : ${genres.map(v => v.name)}\n`
		txt += `  ${sp}  *Release Date* : ${release_date}\n\n`
		txt += global.footer
    client.reply(m.chat, txt, m)
    }
    }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true
}

let acrcloud = require('acrcloud')
let acr = new acrcloud({
	host: 'identify-eu-west-1.acrcloud.com',
	access_key: '9b4e89c29304c1285480d0f4f632fdd1',
	access_secret: '1C8eUNLe1UNr95hkuMgUU0jwy9avHfGkTGoivap9'
})