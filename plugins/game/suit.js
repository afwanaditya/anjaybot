exports.run = {
   usage: ['suit'],
   use: '@tag',
   category: 'fun games',
   async: async (m, {
      client,
      isPrefix,
      isOwner,
      command
   }) => {
      //if (!isOwner && global.db.users[m.sender].quota < 0) return client.reply(m.chat, global.status.quota, m)
      //global.db.users[m.sender].quota -= 1
      let timeout = 60000
      let poin = randomInt(0, 50000)
      let poin_lose = randomInt(0, 10000)
      //if (global.db.users[m.sender].point < 10000) return client.reply(m.chat, Func.texted('bold', `Point yang kamu miliki tidak cukup untuk bermain game suit, minimal mempunyai 10Ribu point`), m)
      client.suit = client.suit ? client.suit : {}
      if (Object.values(client.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) return client.reply(m.chat, Func.texted('bold', `Kamu belum menyelesaikan suit sebelumnya`), m)
      if (!m.mentionedJid[0]) return client.reply(m.chat, example(isPrefix, command, '@0'), m)
      //if (global.db.users[m.mentionedJid[0]].point < 1000) return client.reply(m.chat, Func.texted('bold', `Orang yang kamu tantang tidak mempunyai point yang cukup untuk bermain suit`), m)
      if (Object.values(client.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) return client.reply(m.chat, Func.texted('bold', `Orang yang kamu ajak bermain sedang bermain suit dengan orang lain`), m)
      let id = 'suit_' + new Date() * 1
      let teks = `*S U I T (PVP)*\n\n`
      teks += `@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\n`
      teks += `Silahkan @${m.mentionedJid[0].split`@`[0]} kirim *${isPrefix}acc* untuk mulai bermain dan kirim *${isPrefix}reject* untuk menolak tantangan bermain suit`
      client.suit[id] = {
         chat: await client.reply(m.chat, teks, m),
         id,
         p: m.sender,
         p2: m.mentionedJid[0],
         status: 'wait',
         waktu: setTimeout(() => {
            if (client.suit[id]) return client.reply(m.chat, Func.texted('bold', `Sesi game Suit telah habis.`), m).then(() => delete client.suit[id])
         }, timeout),
         poin,
         poin_lose,
         timeout
      }
   },
   error: false,
   group: true,
   cache: true,
   location: __filename
}

function random(list) {
      return list[Math.floor(Math.random() * list.length)]
   }

   function randomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
   }

   function ucword(str) {
      return (str + '').replace(/^([a-z])|\s+([a-z])/g, function($1) {
         return $1.toUpperCase();
      })
   }