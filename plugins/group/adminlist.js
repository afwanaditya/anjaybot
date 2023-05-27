exports.run = {
   usage: ['adminlist', 'listadmin'],
   category: 'group',
   async: async (m, {
      client,
      text
   }) => {
      try {
         let admin = await client.groupAdmin(m.chat)
         let message = (!text) ? 'Hi admin ' + await (await client.groupMetadata(m.chat)).subject + ' group.' : text
         client.reply(m.chat, `*A D M I N S*\n\n*“${message}”*\n${readmore}\n${admin.map(v => '	◦  @' + v.replace(/@.+/, '')).join('\n')}\n\n${global.footer}`, m) //global.db.setting.header, m)
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   group: true
}

let readmore = String.fromCharCode(8206).repeat(4001)