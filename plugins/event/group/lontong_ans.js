exports.run = {
   async: async (m, {
      client,
      body,
      users
   }) => {
      try {
         if (m.quoted && /cluedong/i.test(m.quoted.text)) {
      client.caklontong = client.caklontong ? client.caklontong : {}
      let id = m.chat
      let reward = 500000
      if (!(id in client.caklontong) && /cluedong/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `Soal tersebut telah berakhir, silahkan kirim ${global.db.setting.multiprefix ? global.db.setting.prefix[0] : global.db.setting.onlyprefix}fortune untuk mendapatkan soal baru.`), m)
      if (m.quoted.id == client.caklontong[id][0].id) {
         let json = JSON.parse(JSON.stringify(client.caklontong[id][1]))
         if (['Timeout', ''].includes(m.text)) return !0
         if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
            await client.reply(m.chat, 'Benar', m).then(async () => {
               await Func.delay(1500)
               client.reply(m.chat, `+ ${Func.formatNumber(reward)} point.`, m)
               global.db.users.find(v => v.jid == m.sender).point += reward
               clearTimeout(client.caklontong[id][3])
               delete client.caklontong[id]
            })
         } else {
            let isPoint = global.db.users.find(v => v.jid == m.sender)
            if (isPoint.point == 0) return client.reply(m.chat, 'Salah', m)
            isPoint.point < reward ? isPoint.point = 0 : isPoint.point -= reward
            await client.reply(m.chat, 'Salah', m).then(async () => {
               await Func.delay(1500)
               client.reply(m.chat, `- ${Func.formatNumber(reward)} point.`, m)
            })
         }
      }
   }
      } catch (e) {
         console.log(Func.jsonFormat(e))
      }
   },
   error: false,
   group: false,
   cache: false,
   location: __filename
}