const PhoneNumber = require('awesome-phonenumber')
const moment = require('moment-timezone')
exports.run = {
   usage: ['mybot'],
   category: 'client',
   async: async (m, {
      client,
      text
   }) => {
      try {
         let found = global.db.bots.find(v => v.jid == m.sender) || global.db.bots.find(v => v.sender == m.sender) || false
         if (!found) return m.reply(Func.texted('bold', `Kamu belum mempunyai bot, silahkan ketik .jadibot untuk membuat bot mu sendiri`))
         let caption = `乂  *C L I E N T*\n\n`
         caption += `	◦  *Number* : ${PhoneNumber('+' + found.jid.split`@`[0]).getNumber('international')}\n`
         caption += `	◦  *Connected* : ${Func.switcher(found.is_connected, '√', '×')}\n`
         caption += `	◦  *Last Connect* : ${moment(found.last_connect).format('DD/MM/YY hh:mm')}\n\n`
         caption += global.footer
         client.sendMessageModify(m.chat, caption, m, {
            ads: false,
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/1973bf356810bd5ab6ceb.jpg')
         })
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
}