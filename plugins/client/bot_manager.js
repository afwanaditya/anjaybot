const fs = require('fs')
exports.run = {
   usage: ['-auth', '+auth'],
   use: 'mention or reply',
   async: async (m, {
      client,
      text,
      command
   }) => {
      try {
         let input = text ? text : m.quoted ? m.quoted.sender : m.mentionedJid.length > 0 ? m.mentioneJid[0] : false
         if (!input) return client.reply(m.chat, Func.texted('bold', `🚩 Mention or reply chat target.`), m)
         let p = await client.onWhatsApp(input.trim())
         if (p.length == 0) return client.reply(m.chat, Func.texted('bold', `🚩 Invalid number.`), m)
         let jid = client.decodeJid(p[0].jid)
         let number = jid.replace(/@.+/, '')
         if (command == '-auth') {
            let user = global.db.users.find(v => v.jid == jid)
            if (!user) return m.reply(Func.texted('bold', `🚩 User not found.`))
            user.authentication = false
            if (global.db.bots.length < 1) return m.reply(Func.texted('bold', `🚩 No connected bots.`))
            let found = global.db.bots.find(v => v.jid == jid) || global.db.bots.find(v => v.sender == jid) || false
            if (!found) return m.reply(Func.texted('bold', `🚩 Session not found.`))
            fs.rmSync(`./lib/sessions/${number}`, {
               recursive: true,
               force: true
            })
            Func.removeItem(global.db.bots, found)
            m.reply(Func.texted('bold', `✅ Session deleted successfully.`))
         } else {
            let found = global.db.users.find(v => v.jid == jid)
            if (!found) return m.reply(Func.texted('bold', `🚩 User not found.`))
            found.authentication = true
            m.reply(Func.texted('bold', `✅ Successfully granted permission to authenticate.`))
         }
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   owner: true,
}