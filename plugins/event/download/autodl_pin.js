exports.run = {
   regex: /pin(?:terest)?(?:\.it|\.com)/,
   async: async (m, {
      client,
      body,
      users,
      setting
   }) => {
      try {
         const regex = /pin(?:terest)?(?:\.it|\.com)/;
         const extract = body ? Func.generateLink(body) : null
         if (extract) {
            const links = extract.filter(v => v.match(regex))
            if (links.length != 0) {
               if (users.limit > 0) {
                  let limit = 1
                  if (users.limit >= limit) {
                     users.limit -= limit
                  } else return client.reply(m.chat, Func.texted('bold', `Limit nte ga cukup.`), m)
               }
               client.sendReact(m.chat, '🕒', m.key)
               //client.reply(m.chat, Func.texted('bold', global.status.wait), m)
               let old = new Date()
               Func.hitstat('pin', m.sender)
               links.map(async link => {
                  let json = await Api.pin(link)
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  if (/jpg|mp4/.test(json.data.type)) return client.sendFile(m.chat, json.data.url, '', `*Anjay Bot Pinterest Downloader*`, m)
                  if (json.data.type == 'gif') return client.sendFile(m.chat, json.data.url, '', `*Anjay Bot Pinterest Downloader*`, m, {
                     gif: true
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