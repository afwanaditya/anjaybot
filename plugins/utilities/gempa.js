exports.run = {
   usage: ['gempa'],
   category: 'searching',
   async: async (m, {
      client
   }) => {
      try {
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.gempa()
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         let caption = `*INFO GEMPA*\n\n`
         caption += `◦  *Lintang* : ${json.result.lintang}\n`
         caption += `◦  *Bujur* : ${json.result.bujur}\n`
         caption += `◦  *Skala* : ${json.result.magnitude}\n`
         caption += `◦  *Kedalaman* : ${json.result.kedalaman}\n`
         caption += `◦  *Potensi* : ${json.result.potensi}\n`
         caption += `◦  *Waktu* : ${json.result.tanggal + json.result.jam}\n`
         caption += `◦  *Pusat Gempa* : ${json.result.wilayah}\n\n`
         caption += global.footer
         client.sendMessageModify(m.chat, caption, m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer(json.result.image)
         })
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false
}