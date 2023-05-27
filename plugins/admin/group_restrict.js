exports.run = {
   usage: ['group'],
   use: 'open / close',
   category: 'admin grup',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      if (!args || !args[0]) return client.reply(m.chat, Func.texted('bold', `close or open ?`), m)
      if (args[0] == 'open') {
         await client.groupSettingUpdate(m.chat, 'not_announcement')
      } else if (args[0] == 'close') {
         await client.groupSettingUpdate(m.chat, 'announcement')
      }
   },
   group: true,
   admin: true,
   botAdmin: true
}