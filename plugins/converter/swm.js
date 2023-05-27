exports.run = {
   usage: ['swm'],
   use: 'packname | author',
   category: 'converter',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         let [packname, ...author] = text.split`|`
         author = (author || []).join`|`
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            let img = await client.downloadMediaMessage(q)
            if (/video/.test(type)) {
               if (q.seconds > 10) return client.reply(m.chat, Func.texted('bold', `Maksimal 10 detik sih`), m)
               return await client.sendSticker(m.chat, img, m, {
                  packname: packname || '',
                  author: author || ''
               })
            } else if (/image/.test(type)) {
               return await client.sendSticker(m.chat, img, m, {
                  packname: packname || '',
                  author: author || ''
               })
            }
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (/image\/(jpe?g|png)/.test(mime)) {
               let img = await q.download()
               if (!img) return client.reply(m.chat, global.status.wrong, m)
               return await client.sendSticker(m.chat, img, m, {
                  packname: packname || '',
                  author: author || ''
               })
            } else if (/video/.test(mime)) {
               if ((q.msg || q).seconds > 10) return client.reply(m.chat, Func.texted('bold', `Maksimal 10 detik sih.`), m)
               let img = await q.download()
               if (!img) return client.reply(m.chat, global.status.wrong, m)
               return await client.sendSticker(m.chat, img, m, {
                  packname: packname || '',
                  author: author || ''
               })
            } else client.reply(m.chat, `untuk mengubah wm di stiker pake format *${isPrefix + command} packname | author*`, m)
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   limit: true,
   cache: true,
   location: __filename
}