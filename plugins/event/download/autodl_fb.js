const bocil = require('@bochilteam/scraper')
exports.run = {
   regex: /^(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/,
   async: async (m, {
      client,
      body,
      users,
      setting
   }) => {
      try {
         const regex = /^(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/;
         const extract = body ? Func.generateLink(body) : null
         if (extract) {
            const links = extract.filter(v => v.match(regex))
            if (links.length != 0) {
               if (users.limit > 0) {
                  let limit = 1
                  if (users.limit >= limit) {
                     users.limit -= limit
                  } else return client.reply(m.chat, Func.texted('bold', `Limit nte ga cukup`), m)
               }
               client.sendReact(m.chat, '🕒', m.key)
               //client.reply(m.chat, Func.texted('bold', global.status.wait), m)
               let old = new Date()
               Func.hitstat('fb', m.sender)
               links.map(async link => {
                  let json = await bocil.savefrom(link)
                 client.sendFile(m.chat, json[0].url[0].url, 'fb.mp4', `*Facebook Downloader*\nQuality : ${json[0].url[0].subname}`, m)
               })
            }
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   limit: true,
   download: true
}