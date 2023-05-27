exports.run = {
   usage: ['tiktok', 'tikmp3', 'tikwm'],
   hidden: ['tt'],
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
         let json = await Api.tt3(Func.ttFixed(args[0]))
         //if (!json.status) return client.reply(m.chat, 'Gagal :v', m)
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
                  client.sendFile(m.chat, json.hasil.download_mp4_hd, `tiktok.mp4`, cap, m)
         if (command == 'tikmp3') return !json.hasil.download_mp3 ? client.reply(m.chat, global.status.fail, m) : client.sendFile(m.chat, json.hasil.download_mp3, 'audio.mp3', '', m)
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