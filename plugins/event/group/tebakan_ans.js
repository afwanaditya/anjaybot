exports.run = {
   async: async (m, {
      client,
      body,
      users
   }) => {
      try {
         if (m.quoted && /apatuh/i.test(m.quoted.text)) {
      client.tebaktebakan = client.tebaktebakan ? client.tebaktebakan : {}
      let id = m.chat
      let reward = 500000
      if (!(id in client.tebaktebakan) && /apatuh/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `Soal tersebut telah berakhir, silahkan kirim _${global.db.setting.multiprefix ? global.db.setting.prefix[0] : global.db.setting.onlyprefix}fortune_ untuk mendapatkan soal baru.`), m)
      if (m.quoted.id == client.tebaktebakan[id][0].id) {
         let json = JSON.parse(JSON.stringify(client.tebaktebakan[id][1]))
         if (['Timeout', ''].includes(m.text)) return !0
         if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
            await client.reply(m.chat, '*Benar*', m).then(() => {
               client.reply(m.chat, `*+ ${Func.formatNumber(reward)} point.*`, m)
               global.db.users.find(v=> v.jid == m.sender).point += reward
               clearTimeout(client.tebaktebakan[id][3])
               delete client.tebaktebakan[id]
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