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
         let old = new Date()
         let json = await Api.tiktok(Func.ttFixed(args[0]))
         if (!json.status || !json.data.video) return client.reply(m.chat, Func.texted('bold', `🚩 Error! private videos or videos not available.`), m)
         let caption = `乂  *T I K T O K*\n\n`
         caption += `   ◦  *Author* : ${json.data.author.nickname} (@${json.data.author.username})\n`      
         caption += `   ◦  *Duration* : ${Func.toTime(json.data.duration)}\n`
         caption += `   ◦  *Sound* : ${json.data.music.title} - ${json.data.music.author}\n`
         caption += `   ◦  *Caption* : ${json.data.caption || '-'}\n`
         caption += `   ◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n`
         caption += global.footer
         if (command == 'tiktok' || command == 'tt') {
            if (json.data.video) return client.sendFile(m.chat, json.data.video, 'video.mp4', caption, m)
            if (json.data.photo) {
               for (let p of json.data.photo) {
                  client.sendFile(m.chat, p, 'image.jpg', caption, m)
                  await Func.delay(1500)
               }
            }
         }
         if (command == 'tikwm') return client.sendFile(m.chat, json.data.videoWM, 'video.mp4', caption, m)
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
