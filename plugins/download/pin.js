exports.run = {
   usage: ['pin'],
   use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://pin.it/5fXaAWE'), m)
         if (!args[0].match(/pin(?:terest)?(?:\.it|\.com)/)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
      //client.reply(m.chat, Func.texted('bold', global.status.wait), m)
         let old = new Date()
         let json = await Api.pin(args[0])
         if (!json.status) return client.reply(m.chat, 'Gagal:v', m)
         if (/jpg|mp4/.test(json.data.type)) return client.sendFile(m.chat, json.data.url, '', '', m)
         if (json.data.type == 'gif') return client.sendFile(m.chat, json.data.url, '', `*Anjay Bot Pinterest Downloader*`, m, {
            gif: true
         })
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}