const { ttp } = require('lib/canvas')
exports.run = {
   usage: ['ttp', 'ttp2'],
   use: 'text',
   category: 'converter',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      if (command == 'ttp') {
      try {         
         let exif = global.db.setting
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'apa kabar'), m)       
         let um = await ttp(text)
            await client.sendSticker(m.chat, um, m, {
               packname: exif.sk_pack,
               author: exif.sk_author
            })
          } catch {
            client.reply(m.chat, global.status.error, m)
         }
      }
      else if (command == 'ttp2') {
            try {       
         let exif = global.db.setting
         if (!text) return client.reply(m.chat, Func2.example(isPrefix, command, 'apa kabar'), m)       
         let um = `https://api.akuari.my.id/other/ttp2?text=${text}`
            await client.sendSticker(m.chat, um, m, {
               packname: exif.sk_pack,
               author: exif.sk_author
            })
          } catch {
            client.reply(m.chat, global.status.error, m)
         }
      }
      },
limit: true,
error: false,
cache: true
}

