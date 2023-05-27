exports.run = {
   async: async (m, {
      client,
      body
   }) => {
      try {
      if (m.quoted && /quizskip|quizclue/i.test(m.quoted.text)) {
      client.quiz = client.quiz ? client.quiz : {}
      if (m.quoted && m.quoted.sender != client.decodeJid(client.user.id)) return
      let users = global.db.users[m.sender]
      let id = m.chat
      let reward = Func.randomInt(500, 500000)
      if (!(id in client.quiz) && /quizskip|quizclue/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `Soal tersebut telah berakhir, silahkan kirim _${global.db.setting.multiprefix ? global.db.setting.prefix[0] : global.db.setting.onlyprefix}quiz_ untuk mendapatkan soal baru.`), m)
      if (body) {
         let json = JSON.parse(JSON.stringify(client.quiz[id][1]))
         const answer = body.toLowerCase()
         if ((client.quiz[id][3]).includes(answer)) return client.reply(m.chat, `*${answer}* sudah terjawab!\n\nSilahkan cari jawaban lain, denda : *- ${Func.formatNumber(reward)} Point.*`, m).then(() => {
            if (reward > users.point) {
               users.point = 0
            } else {
               users.point -= reward
            }
         })
         if (!json.jawaban.includes(answer)) return client.reply(m.chat, `Jawaban mu salah!, *- ${Func.formatNumber(reward)} Point.*`, m).then(() => {
            if (reward > users.point) {
               users.point = 0
            } else {
               users.point -= reward
            }
         })
         users.point += reward
         client.quiz[id][3].push(answer)
         if (!client.quiz[id][4][m.sender]) {
            client.quiz[id][4][m.sender] = {
               score: reward,
               answer: 1,
            }
         } else {
            client.quiz[id][4][m.sender].score += reward
            client.quiz[id][4][m.sender].answer += 1
         }
         var clue = ''
         for (let i = 0; i < json.jawaban.length; i++) {
            if (client.quiz[m.chat][3].includes(json.jawaban[i])) {
               clue += '```' + Func.ucword(json.jawaban[i]) + '```\n'
            } else {
               clue += '```' + Func.ucword(json.jawaban[i].replace(/[abcdefghijklmnopqrstuvwxyz]/g, '_')) + '```\n'
            }
         }
         let pop = clue.split('\n')
         pop.pop()
         if (client.quiz[id][3].length == json.jawaban.length) {
            let people = Object.entries(client.quiz[id][4]).sort((a, b) => b[1].score - a[1].score)
            let teks = `*Q U I Z*\n\n`
            teks += people.map(([user, data], i) => (i + 1) + '. @' + user.split`@` [0] + ' ' + (i == 0 ? '🥇' : i == 1 ? '🥈' : i == 2 ? '🥉' : '') + '\n    *Benar* : ' + data.answer + '  –  *Mendapatkan* : ' + Func.formatNumber(data.score) + ' point').join('\n')
            teks += `\n\n`
            teks += `*J A W A B A N*\n\n`
            teks += pop.map((v, i) => (i + 1) + '. ' + v).join('\n')
            teks += `\n\nPermainan selesai!, silahkan kirim *.quiz* untuk mendapatkan soal baru`
            return client.reply(m.chat, teks, m).then(() => {
               clearTimeout(client.quiz[id][2])
               delete client.quiz[id]
            })
         } else {
            let people = Object.entries(client.quiz[id][4]).sort((a, b) => b[1].score - a[1].score)
            let teks = `*Q U I Z*\n\n`
            teks += people.map(([user, data], i) => (i + 1) + '. @' + user.split`@` [0] + ' ' + (i == 0 ? '🥇' : i == 1 ? '🥈' : i == 2 ? '🥉' : '') + '\n    *Benar* : ' + data.answer + '  –  *Mendapatkan* : ' + Func.formatNumber(data.score) + ' point').join('\n')
            teks += `\n\n`
            teks += `*J A W A B A N*\n\n`
            teks += pop.map((v, i) => (i + 1) + '. ' + v).join('\n')
            teks += `\n\nSisa *${json.jawaban.length - client.quiz[id][3].length}* jawaban belum terjawab.`
            return client.reply(m.chat, teks, m)
         }
      }
   }
      } catch (e) {
         return client.reply(m.chat, e, m)
      }
   },
   error: false,
   group: false,
   cache: true
}
