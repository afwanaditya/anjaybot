exports.run = {
   usage: ['soundcloud'],
   hidden: ['scdl'],
   use: 'query / link',
   category: 'downloader',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, `• ${Func.texted('bold', `Example`)} :\n\n${isPrefix + command} tak ingin usai\n${isPrefix + command} https://soundcloud.com/cipilatoz/keisya-levronka-tak-ingin-usai`, m)
         client.sendReact(m.chat, '🕒', m.key)
      //client.reply(m.chat, Func.texted('bold', global.status.wait), m)
         const json = await Api.soundcloud(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         if (text.match('soundcloud.com')) return client.sendFile(m.chat, json.data.url, json.data.title + '.mp3', '', m, {
            document: true
         })
         if (json.data.length == 0) return client.reply(m.chat, global.status.fail, m)
         let rows = []
         json.data.map(v => rows.push({
            title: v.artist + ' – ' + v.title,
            rowId: `${isPrefix + command} ${v.url}`,
            description: `[ Duration : ${v.duration} – Genre : ${v.genre} – Plays : ${v.plays}x ]`
         }))
         client.sendList(m.chat, '', `Menampilkan hasil pencarin dari : “${text}”, pilih judul di bawah ini`, '', 'Klik disini ea!', [{
            rows
         }], m)
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   cache: true,
   limit: true,
   location: __filename
}