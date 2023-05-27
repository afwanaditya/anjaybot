exports.run = {
   async: async (m, {
      client,
      body,
      users
   }) => {
      try {
         if (m.quoted && /guesclue/i.test(m.quoted.text)) {
      client.tebaklirik = client.tebaklirik ? client.tebaklirik : {}
      let reward = Func.randomInt(500, 500000)
      let id = m.chat
      if (!(id in client.tebaklirik) && /guesclue/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `Soal tersebut telah berakhir, silahkan kirim _${global.db.setting.multiprefix ? global.db.setting.prefix[0] : global.db.setting.onlyprefix}guess_ untuk mendapatkan soal baru.`), m)
      if (m.quoted.id == client.tebaklirik[id][0].id) {
         let json = JSON.parse(JSON.stringify(client.tebaklirik[id][1]))
         if (['Timeout', ''].includes(m.text)) return !0
         if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
            await client.reply(m.chat, '*Benar*', m).then(() => {
               client.reply(m.chat, `*+ ${Func.formatNumber(reward)} point.*`, m)
               global.db.users.find(v=> v.jid == m.sender).point += reward
               clearTimeout(client.tebaklirik[id][3])
               delete client.tebaklirik[id]
            })
         } else {
            let isPoint = global.db.users.find(v=> v.jid == m.sender)
            if (isPoint.point == 0) return client.reply(m.chat, '*Salah*', m)
            isPoint.point < reward ? isPoint.point = 0 : isPoint.point -= reward
            await client.reply(m.chat, '*Salah*', m).then(() => {
               client.reply(m.chat, `*- ${Func.formatNumber(reward)} point.*`, m)
            })
         }
      }
   }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   group: false,
   cache: true,
   location: __filename
}