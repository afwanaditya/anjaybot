const bocil = require('@bochilteam/scraper')
exports.run = {
   usage: ['fb'],
   hidden: ['fbdl', 'fbvid'],
   use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://fb.watch/7B5KBCgdO3'), m)
         if (!args[0].match(/(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         //client.reply(m.chat, Func.texted('bold', global.status.wait), m)
         let json = await bocil.savefrom(args[0])
         //if (!json.status) return client.reply(m.chat, 'Gagal :v', m)
         client.sendFile(m.chat, json[0].url[0].url, 'fb.mp4', `*Facebook Downloader*\nQuality : ${json[0].url[0].subname}`, m)
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}