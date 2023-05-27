exports.run = {
   usage: ['lyric'],
   hidden: ['lirik'],
   use: 'query',
   category: 'searching',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'melukis senja'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.lyric(text.trim())
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         if (text.match('musixmatch.com')) return client.reply(m.chat, json.data.lyric, m)
         let rows = []
         json.data.map(v => rows.push({
            title: v.title,
            rowId: `${isPrefix + command} ${v.url}`,
            description: ``
         }))
         client.sendList(m.chat, '', `Menampilkan hasil dari : “${text}” `, '', 'Klik disini ea!', [{
            rows
         }], m)
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   restrict: true
}