exports.run = {
   usage: ['kbbg'],
   use: 'word',
   category: 'searching',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'caem'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.kbbg(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         let teks = `*KBBG*\n\n`
         teks += json.data.description
         client.reply(m.chat, teks, m)
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   restrict: true
}