exports.run = {
   usage: ['acc', 'reject', 'batu', 'gunting', 'kertas'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
         client.suit = client.suit ? client.suit : {}
         let room = Object.values(client.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
         if (room) {
            let win = ''
            let tie = false
            if (m.sender == room.p2 && /(acc|reject)/.test(command) && m.isGroup && room.status == 'wait') {
               if (command == 'reject') {
                  client.reply(m.chat, Func.texted('bold', `@${room.p2.split`@`[0]} menolak tantangan bermain suit, suit dibatalkan`), m)
                  delete client.suit[room.id]
                  return !0
               }
               room.status = 'play'
               room.asal = m.chat
               clearTimeout(room.waktu)
               let teks = `Suit telah dikirimkan ke chat @${room.p.split`@`[0]} dan @${room.p2.split`@`[0]}. Silahkan pilih suit dichat masing².`
               let pesan = `Silahkan pilih ${isPrefix}Batu, ${isPrefix}Gunting, atau ${isPrefix}Kertas untuk mulai bermain`
               let infos = `Apabila menang akan mendapat *+${Func.formatNumber(room.poin)} Point* dan apabila kalah Point mu dikurangi sebesar *-${Func.formatNumber(room.poin_lose)}*`
               client.reply(m.chat, Func.texted('bold', teks), m)
               Func.delay(1000)
               await client.reply(room.p, pesan + `\n\n` + infos, null)
               await client.reply(room.p2, pesan + `\n\n` + infos, null)
               room.waktu_milih = setTimeout(() => {
                  if (!room.pilih && !room.pilih2) client.reply(m.chat, Func.texted('bold', `Sesi game Suit telah dihapus karena terlalu lama tidak ada aktivitas.`))
                  else if (!room.pilih || !room.pilih2) {
                     win = !room.pilih ? room.p2 : room.p
                     client.reply(m.chat, Func.texted('bold', `@${(room.pilih ? room.p2 : room.p).split`@`[0]} tidak memilih suit, game berakhir.`))
                     global.db.users[win == room.p ? room.p : room.p2].exp += room.poin
                     global.db.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
                  }
                  delete client.suit[room.id]
                  return !0
               }, room.timeout)
            }
            let jwb = m.sender == room.p
            let jwb2 = m.sender == room.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /(gunting|batu|kertas)/i
            if (jwb && reg.test(command) && !room.pilih && !m.isGroup) {
               room.pilih = reg.exec(command.toLowerCase())[0]
               room.text = command
               client.reply(m.chat, Func.texted('bold', `Kamu telah memilih ${command}${!room.pilih2 ? `, silahkan tunggu lawan memilih suit.` : ''}`), m)
               if (!room.pilih2) client.reply(room.p2, Func.texted('bold', `Lawan sudah memilih suit sekarang giliranmu memilih suit.`))
            }
            if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
               room.pilih2 = reg.exec(command.toLowerCase())[0]
               room.text2 = command
               client.reply(m.chat, Func.texted('bold', `Kamu telah memilih ${command}${!room.pilih ? `, silahkan tunggu lawan memilih suit.` : ''}`), m)
               if (!room.pilih) client.reply(room.p, Func.texted('bold', `Lawan sudah memilih suit sekarang giliranmu memilih suit.`))
            }
            let stage = room.pilih
            let stage2 = room.pilih2
            if (room.pilih && room.pilih2) {
               clearTimeout(room.waktu_milih)
               if (b.test(stage) && g.test(stage2)) win = room.p
               else if (b.test(stage) && k.test(stage2)) win = room.p2
               else if (g.test(stage) && k.test(stage2)) win = room.p
               else if (g.test(stage) && b.test(stage2)) win = room.p2
               else if (k.test(stage) && b.test(stage2)) win = room.p
               else if (k.test(stage) && g.test(stage2)) win = room.p2
               else if (stage == stage2) tie = true
               let teks = `*S U I T (PVP)*\n\n`
               teks += `Status : *${tie ? 'Draw!' : 'Normal!'}*\n\n`
               teks += `@${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? `Menang [ *+${room.poin} point.* ]` : `Kalah [ *-${room.poin_lose} point.* ]`}\n`
               teks += `@${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? `Menang [ *+ ${room.poin} point.* ]` : `Kalah [ *-${room.poin_lose} point.* ]`}`
               client.reply(room.asal, teks, m, {
                  mentions: [room.p, room.p2]
               })
               if (!tie) {
                  global.db.users[win == room.p ? room.p : room.p2].point += room.poin
                  global.db.users[win == room.p ? room.p2 : room.p].point -= room.poin_lose
               }
               delete client.suit[room.id]
            }
         }
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e.message), m)
      }
   },
   error: false,
   game: true,
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