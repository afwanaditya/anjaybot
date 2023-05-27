exports.run = {
   usage: ['igs'],
   hidden: ['igstory'],
   use: 'username / link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'hosico_cat'), m)
         client.sendReact(m.chat, '🕒', m.key)
      //client.reply(m.chat, Func.texted('bold', global.status.wait), m)
         let old = new Date()
         let json = await Api.igs(args[0])
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         for (let i = 0; i < json.data.length; i++) {
            client.sendFile(m.chat, json.data[i].url, ``, `*Anjay Bot IGS Downloader*`, m)
            await Func.delay(1500)
         }
         await Func.delay(3000)
         client.reply(m.chat, Func.texted('bold', `Selesai, all stories berhasil didownload.`), m)
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