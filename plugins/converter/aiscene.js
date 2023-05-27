exports.run = {
   usage: ['aiscene'],
   use: 'reply photo',
   category: 'converter',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         client.sendReact(m.chat, '🕒', m.key)
         let uploadImage = require('src/uploadImage')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/(jpeg)/i.test(mime)) return client.reply(m.chat, `*Send or reply to photos*`, m)
  let media = await q.download()
  let link = await uploadImage(media)
let api = 'https://xznsenpai.xyz/api/aiscene/?url='
return client.sendFile(m.chat, api + link, 'image.jpg', "Anjay Keren", m)
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false
}