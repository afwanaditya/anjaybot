exports.run = {
   regex: /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:tv\/|p\/|reel\/)(?:\S+)?$/,
   async: async (m, {
      client,
      body,
      users,
      setting
   }) => {
      try {
         const regex = /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:tv\/|p\/|reel\/)(?:\S+)?$/;
         const extract = body ? Func.generateLink(body) : null
         if (extract) {
            const links = extract.filter(v => Func.igFixed(v).match(regex))
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
               Func.hitstat('ig', m.sender)
               links.map(async link => {
                  let json = await Api.ig(Func.igFixed(link))
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  json.data.map(async v => {
                     client.sendFile(m.chat, v.url, v.type == 'mp4' ? Func.filename('mp4') : Func.filename('jpg'), `*Anjay Bot IG Downloader*`, m)
                     await Func.delay(1500)
                  })
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