exports.run = {
   usage: ['limit'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix,
   }) => {
      let user = global.db.users.find(v => v.jid == m.sender)
      if (user.limit < 1) return client.reply(m.chat, `Limit Kamu udah habis`, m)
      client.reply(m.chat, `Limit Kamu : [ *${Func.formatNumber(user.limit)}* / Bulan ]${!user.premium ? `\n\nEnte bukan pengguna premium, jadi limit nya segini aje` : ''}`, m)
   },
   error: false
}