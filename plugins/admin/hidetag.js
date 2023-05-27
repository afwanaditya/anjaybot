exports.run = {
   usage: ['hidetag'],
   use: 'text',
   category: 'admin grup',
   async: async (m, {
      client,
      text,
      participants
   }) => {
      let users = participants.map(u => u.id)
      await client.reply(m.chat, text, null, {
         mentions: users
      })
   },
   admin: true,
   group: true,
   
}