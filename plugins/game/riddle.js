let fs = require('fs')
exports.run = {
   usage: ['riddle'],
   category: 'fun games',
   async: async (m, {
      client,
      isOwner,
      isPrefix
   }) => {      
   	
      client.riddle = client.riddle ? client.riddle : {}
      let id = m.chat,
         timeout = 120000,
         poin = 0
      if (id in client.riddle) return client.reply(m.chat, '*^ pertanyaan ini belum dijawab!*', client.riddle[id][0])
      let _riddle = JSON.parse(fs.readFileSync('./media/riddle.json'))
      let json = _riddle[Math.floor(Math.random() * _riddle.length)]
      let teks = `*R I D D L E*\n\n${json.pertanyaan}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} minutes* ]\n`
      teks += `Balas pesan ini untuk menjawab pertanyaan, kirim *${isPrefix}ridclue* untuk bantuan dan *${isPrefix}ridskip* untuk menghapus sesi.`
      client.riddle[id] = [
         await client.reply(m.chat, teks, m),
         json, poin,
         setTimeout(() => {
            if (client.riddle[id]) client.reply(m.chat, `*Waktunya habis!*\nJawabannya adalah : *${json.jawaban}*`, client.riddle[id][0])
            delete client.riddle[id]
         }, timeout)
      ]
   },
   
   quota: true
}