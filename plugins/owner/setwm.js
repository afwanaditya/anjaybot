exports.run = {
   usage: ['setwm'],
   use: 'packname | author',
  
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         let setting = global.db.setting
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'Nolep Bot by | @dandisubhani_'), m)
         let [packname, ...author] = text.split`|`
         author = (author || []).join`|`
         setting.sk_pack = packname || ''
         setting.sk_author = author || ''
         client.reply(m.chat, Func.texted('bold', `Sticker Watermark successfully set.`), m)
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   owner: true,
   cache: true,
   location: __filename
}