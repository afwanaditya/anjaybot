exports.run = {
   regex: /^(?:https?:\/\/)?(?:www\.|vt\.|vm\.|t\.)?(?:tiktok\.com\/)(?:\S+)?$/,
   async: async (m, {
      client,
      body,
      users,
      setting,
      prefixes
   }) => {
      try {
         const regex = /^(?:https?:\/\/)?(?:www\.|vt\.|vm\.|t\.)?(?:tiktok\.com\/)(?:\S+)?$/;
         const extract = body ? Func.generateLink(body) : null
         if (extract) {
            const links = extract.filter(v => Func.ttFixed(v).match(regex))
            if (links.length != 0) {
               if (users.limit > 0) {
                  let limit = 1
                  if (users.limit >= limit) {
                     users.limit -= limit
                  } else return client.reply(m.chat, Func.texted('bold', `Limit nte ga cukup.`), m)
               }
               client.sendReact(m.chat, '🕒', m.key)
               client.reply(m.chat, Func.texted('bold', global.status.wait), m)
               let old = new Date()
               Func.hitstat('tiktok', m.sender)
               links.map(async link => {
                  let json = await Api.tt3(Func.ttFixed(link))
   let cap = `*Anjay Bot Tiktok Downloader*\n\n`
cap += `• Username : ${json.hasil.username}\n`
cap += `• Title : ${json.hasil.video_title}\n`
cap += `• Likes : ${json.hasil.like}\n`
cap += `• Comment : ${json.hasil.comment}\n`
cap += `• Views : ${json.hasil.views}\n`
cap += `• Share : ${json.hasil.share}\n`
cap += `• Music Title : ${json.hasil.music_title}\n`
cap += `• Music Author : ${json.hasil.music_author}\n\n`
cap += `*Reply pesan ini dengan .tomp3 untuk ambil Soundnya*`
                  //if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  client.sendFile(m.chat, json.hasil.download_mp4_hd, `tiktok.mp4`, cap, m)
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