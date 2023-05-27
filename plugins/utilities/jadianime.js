exports.run = {
   usage: ['toanime', 'jadinanime'],
   use: 'reply foto',
   category: 'converter',
   async: async (m, {
      client
   }) => {
      try {     
         client.sendReact(m.chat, '🕒', m.key)
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            if (/image/.test(type)) {
               let img = await client.downloadMediaMessage(q)
               let url = await scrap.uploadImage(img)
               let json = await Api.toAnime(url)
               if (!json.status) return client.reply(m.chat, Func.texted('bold', `gagal jadi anime.`), m)
               client.sendFile(m.chat, json.data.img, 'image.jpg', '', m)
            } else client.reply(m.chat, Func.texted('bold', `cuma buat photo.`), m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, Func.texted('bold', `reply photonya.`), m)
            if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, Func.texted('bold', `CUMA BUAT PHOTO BG.`), m)
            let img = await q.download()
            let url = await scrap.uploadImage(img)
            let json = await Api.toAnime(url)
            if (!json.status) return client.reply(m.chat, Func.texted('bold', `gagal jadi anime.`), m)
            client.sendFile(m.chat, json.data.img, 'image.jpg', 'jadi anime luwh', m)
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true
}