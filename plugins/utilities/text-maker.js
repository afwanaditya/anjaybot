exports.run = {
   usage: ['textmaker'],
   hidden: ['blackpink', 'blood', 'breakwall', 'glow', 'joker', 'magma', 'matrix', 'multicolor', 'neon', 'papercut', 'slice'],
   use: 'text',
   category: 'converter',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (command == 'textmaker') {
            if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'Nolep Bot'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', `Kepanjangan coy`), m)
            client.sendReact(m.chat, '🕒', m.key)
            const style = ['blackpink', 'blood', 'breakwall', 'glow', 'joker', 'magma', 'matrix', 'multicolor', 'neon', 'papercut', 'slice']
            let rows = []
            style.map(v => rows.push({
               title: v.toUpperCase(),
               rowId: `${isPrefix + v} ${text}`,
               description: ``
            }))
            client.sendList(m.chat, '', `Pilih yang kamu mau`, '', 'Klik disini ea!', [{
               rows
            }], m)
         } else {
            if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'Nolep Bot'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', `Kepanjangan coy`), m)
            let old = new Date()
            await client.sendReact(m.chat, '🕒', m.key)
            let result = Api.tm(command.toLowerCase(), text)
            if (!result || result.constructor.name != 'String') return client.reply(m.chat, global.status.fail, m)
            client.sendFile(m.chat, result, ``, `*Bot Nolep Text Maker*`, m)
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true
}