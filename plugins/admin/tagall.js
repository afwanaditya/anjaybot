exports.run = {
   usage: ['everyone'],
   hidden: ['tagall'],
   use: 'text (optional)',
   category: 'admin grup',
   async: async (m, {
      client,
      text,
      participants
   }) => {
      try {
         let member = participants.map(v => v.id)
         let readmore = String.fromCharCode(8206).repeat(4001)
         let message = (!text) ? 'Tag All di ' + await (await client.groupMetadata(m.chat)).subject + ' group.' : text
         client.reply(m.chat, `\n*“${message}”*\n${readmore}\n${member.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n')}`, m)
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   admin: true,
   group: true
}