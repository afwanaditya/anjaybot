exports.run = {
   usage: ['tourl', 'upload'],
   use: 'reply to media',
   category: 'converter',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {           
     try {
  let uploadFile = require('src/uploadFile')
  let uploadImage = require('src/uploadImage')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/video|image|gif/.test(mime)) return client.reply(m.chat, `*Send or reply to photos and videos with captions ${isPrefix + command}*`, m)
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
    client.reply(m.chat, link, m)
    } catch {
    client.reply(m.chat, global.status.error, m)
   }
   },
   error: false,
   limit: true
}
