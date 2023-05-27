const { writeFileSync: create, readFileSync: read }= require('fs')
exports.run = {
   usage: ['send'],
   
   async: async (m, {
      client,
      command,
      text
   }) => {
      try {
         await props.save()
         client.reply(m.chat, global.status.wait, m)
         await client.sendFile(m.chat, `${text}`, '', '', m)
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   owner: true,
   cache: true,
   location: __filename
}