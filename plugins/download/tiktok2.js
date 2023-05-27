exports.run = {
   usage: ['tik', 'tt2'],
   use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://vm.tiktok.com/ZSR7c5G6y/'), m)
         if (!args[0].match('tiktok.com')) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
      //client.reply(m.chat, Func.texted('bold', global.status.wait), m)
         let old = new Date()
         let json = await Api.tiktok(Func.ttFixed(args[0]))
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         if (command == 'tik' || command == 'tt2') return client.sendFile(m.chat, json.data.video, `tt.mp4`, `*Anjay Bot Tiktok Downloader*\n\n*Reply pesan ini dengan .tomp3 untuk ambil Soundnya*`, m)
         if (command == 'tikmp3') return !json.data.audio ? client.reply(m.chat, global.status.fail, m) : client.sendFile(m.chat, json.data.audio, 'audio.mp3', '', m)
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