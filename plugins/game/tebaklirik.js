let fs = require('fs')
exports.run = {
   usage: ['tebaklirik'],
   category: 'fun games',
   async: async (m, {
      client,
      isOwner,
      isPrefix
   }) => {     
      client.tebaklirik = client.tebaklirik ? client.tebaklirik : {}
      let id = m.chat,
         timeout = 120000,
         poin = 0
      if (id in client.tebaklirik) return client.reply(m.chat, '*^ pertanyaan ini belum dijawab!!*', client.tebaklirik[id][0])
      let _tebaklirik = JSON.parse(fs.readFileSync('./media/tebaklirik.json'))
      let json = _tebaklirik[Math.floor(Math.random() * _tebaklirik.length)]
      let teks = `*TEBAK LIRIK*\n\n${json.soal}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} minutes* ]\n`
      teks += `Balas pesan ini untuk menjawab pertanyaan, ketik *${isPrefix}guesclue* untuk bantuan.`
      client.tebaklirik[id] = [
         await client.reply(m.chat, teks, m),
         json, poin,
         setTimeout(() => {
            if (client.tebaklirik[id]) client.reply(m.chat, `*Waktunya habis!*\nJawabannya adalah : *${json.jawaban}*`, client.tebaklirik[id][0])
            delete client.tebaklirik[id]
         }, timeout)
      ]
   },
   
   quota: true
}