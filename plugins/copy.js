const Ocr = require('lib/ocr')
exports.run = {
   usage: ['copytext', 'ocr'],
   use: 'reply photo',
   category: 'converter',
   async: async (m, {
      client,
      command
   }) => {
      try {
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            Func.hitstat('copytext', m.sender)
            if (/image/.test(type)) {
               client.sendReact(m.chat, '🕒', m.key)
               let old = new Date()
               let img = await client.downloadMediaMessage(q)
               let up = await scrap.uploadImage(img)
               let result = await Ocr(up)
               if (!result.status) return m.reply(Func.jsonFormat(result))
               m.reply(result.data.text)
            } else client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, Func.texted('bold', `🚩 Reply photo.`), m)
            if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
            client.sendReact(m.chat, '🕒', m.key)
            let img = await q.download()
            let up = await scrap.uploadImage(img)
            let result = await Ocr(up)
            if (!result.status) return m.reply(Func.jsonFormat(result))
            m.reply(result.data.text)
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true
}