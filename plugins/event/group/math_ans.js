exports.run = {
   async: async (m, {
      client,
      text
   }) => {
      try {
        if (m.quoted && m.quoted.sender != client.user.id.split(':')[0] + '@s.whatsapp.net') return
   if (m.quoted && /mathskip/i.test(m.quoted.text)) {
      client.math = client.math ? client.math : {}
      let id = m.chat
      if (!(id in client.math) && /mathskip/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `Sesi permainan kuis math sudah berakhir, Ketik _${global.db.setting.multiprefix ? global.db.setting.prefix[0] : global.db.setting.onlyprefix}math_ untuk memulai game baru.`), m)
      let math = JSON.parse(JSON.stringify(client.math[id][1]))
      if (m.text == math.result) {
         global.db.users.find(v=> v.jid == m.sender).point += math.bonus
         clearTimeout(client.math[id][3])
         delete client.math[id]
         await client.reply(m.chat, Func.texted('bold', `Benar`), m).then(() => {
            client.reply(m.chat, Func.texted('bold', `+ ${math.bonus} point.`), m)
         })
      } else {
         if (--client.math[id][2] == 0) {
            clearTimeout(client.math[id][3])
            delete client.math[id]
            await await client.reply(m.chat, '*Salah*', m).then(() => {
               client.reply(m.chat, `_Permainan selesai karena 3x jawaban salah, dan jawabannya adalah_ : *${math.result}*`, m)
            })
         } else await client.reply(m.chat, '*Salah*', m) 
      }
   }
      } catch (e) {
         return client.reply(m.chat, e, m)
      }
   },
   error: false,
   group: false
}