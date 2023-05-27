exports.run = {
   usage: ['setwelcome', 'setleft'],
   hidden: ['setout'],
   use: 'text',
   category: 'admin grup',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      let setup = global.db.groups.find(v => v.jid == m.chat)
      if (command == 'setwelcome') {
         if (!text) return client.reply(m.chat, formatWel(isPrefix, command), m)
         setup.text_welcome = text
         await client.reply(m.chat, Func.texted('bold', `berhasil disetting.`), m)
      } else if (/set(out|left)/i.test(command)) {
         if (!text) return client.reply(m.chat, formatLef(isPrefix, command), m)
         setup.text_left = text
         await client.reply(m.chat, Func.texted('bold', `berhasil disetting.`), m)
      }
   },
   admin: true
}

const formatWel = (prefix, command) => {
   return `Cara penggunaan :

*1.* +tag : untuk @tag member 
*2.* +grup : untuk nama grup

• *Contoh* : ${prefix + command} Hi +tag, Selamat datang ea`
}

const formatLef = (prefix, command) => {
   return `Cara penggunaan :

*1.* +tag : untuk @tag member 
*2.* +grup : untuk nama grup

• *Contoh* : ${prefix + command} Selamat tinggal +tag , jangan lupa gorengannya yaa`
}