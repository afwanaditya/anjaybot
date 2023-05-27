let fs = require('fs')
exports.run = {
   usage: ['brainout'],
   category: 'fun games',
   async: async (m, {
      client,
      isOwner,
      isPrefix
   }) => {     
      client.brainout = client.brainout ? client.brainout : {}
      let id = m.chat,
         timeout = 120000,
         poin = 0
      if (id in client.brainout) return client.reply(m.chat, '*^ pertanyaan ini belum dijawab!!*', client.brainout[id][0])
      let _brainout = JSON.parse(fs.readFileSync('./media/brainout.json'))
      let json = _brainout[Math.floor(Math.random() * _brainout.length)]
      let teks = `*B R A I N O U T*\n\n${json.pertanyaan}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} minutes* ]\n`
      teks += `Balas pesan ini untuk menjawab pertanyaan, ketik *${isPrefix}brainwhat* untuk bantuan dan *${isPrefix}brainskip* untuk menghapus sesi.`
      client.brainout[id] = [
         await client.reply(m.chat, teks, m),
         json, poin,
         setTimeout(() => {
            if (client.brainout[id]) client.reply(m.chat, `*Waktunya habis!*\nJawabanya adalah : *${json.jawaban}*`, client.brainout[id][0])
            delete client.brainout[id]
         }, timeout)
      ]
   },
   quota: true,
   cache: true
}