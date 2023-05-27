const { quotes } = require('lib/jagokata')
exports.run = {
   usage: ['kata'],
   use: '(option)',
   category: 'random text',
   async: async (m, {
      client,
      isPrefix,
      args,
      command
   }) => {
try {      	
let er = `• *Example* : ${isPrefix + command} cinta

Opsi Tersedia:
• cinta
• rindu
• mimpi
• sendiri
• sabar
• kesedihan
• pernikahan
• kemerdekaan`
    if (!args[0]) return client.reply(m.chat, er, m)
    switch (args[0].toLowerCase()) {
        case 'cinta':
        case 'rindu':
        case 'mimpi':
        case 'sendiri':
        case 'sabar':
        case 'kesedihan':
        case 'pernikahan':
        case 'kemerdekaan':
            quotes(args[0].toLowerCase()).then(res => {
            if (res.status == false) return client.reply(m.chat, global.status.fail, m)
                let data = JSON.stringify(res)
                let json = JSON.parse(data)
                let random = Math.floor(Math.random() * json.data.length)
                let hasil = json.data[random]
                let { author, bio, quote } = hasil
                client.reply(m.chat, `“${quote}”\n\n${author} - ${bio}`, m)
            })
            break
        default:
            client.reply(m.chat, er, m)
        }
      } catch (e) {
         return client.reply(m.chat, String(e), m)
     }
   },
   error: false,
   limit: true
}

