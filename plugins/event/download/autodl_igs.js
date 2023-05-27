exports.run = {
   regex: /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:stories\/)(?:\S+)?$/,
   async: async (m, {
      client,
      body,
      users,
      setting,
   }) => {
      try {
         const regex = /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:stories\/)(?:\S+)?$/;
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
               Func.hitstat('igs', m.sender)
               links.map(async link => {
                  let json = await Api.igs(link)
                  if (!json.status) return client.reply(m.chat, `${global.status.fail} : [ @${link.split('/')[4]} ]`, m)
                  for (let i = 0; i < json.data.length; i++) {
                     client.sendFile(m.chat, json.data[i].url, ``, `*Anjay Bot IGS Downloader*`, m)
                     await Func.delay(1500)
                  }
                  await Func.delay(1500)
                  client.reply(m.chat, Func.texted('bold', `✅ Selesai.`), m)
               })
            }
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   limit: true,
   download: true,
}