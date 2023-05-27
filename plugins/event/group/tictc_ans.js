exports.run = {
   async: async (m, {
      client,
      body,
      users,
      isPrefix,
      command
   }) => {
      try {
   //TicTacToe Fixed By Liya
   let reward = Func.randomInt(500, 500000)
   let playScore = 150000
   let ok
   let isWin = !1
   let isTie = !1
   let isSurrender = !1
   client.game = client.game ? client.game : {}
   let room = Object.values(client.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
   if (room) {
      if (!/^([1-9]|(me)?nyerah|surr?ender)$/i.test(m.text)) return !0
      isSurrender = !/^[1-9]$/.test(m.text)
      if (m.sender !== room.game.currentTurn) { // nek wayahku
         if (!isSurrender) return !0
      }
      if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
         client.reply(m.chat, {
            '-3': '*Game Over!*',
            '-2': '*Invalid*',
            '-1': '*Invalid Position!*',
            0: '*Invalid Position!*',
         } [ok], m)
         return !0
      }
      if (m.sender === room.game.winner) isWin = true
      else if (room.game.board === 511) isTie = true
      let arr = room.game.render().map(v => {
         return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
         } [v]
      })
      if (isSurrender) {
         room.game._currentTurn = m.sender === room.game.playerX
         isWin = true
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner
      let str = `乂  *T I C T A C T O E*\n\n`
      str += `${arr.slice(0, 3).join('')}\n`
      str += `${arr.slice(3, 6).join('')}\n`
      str += `${arr.slice(6).join('')}\n\n`
      str += `${isWin ? `@${winner.split`@`[0]} Menang! (+ *${Func.formatNumber(reward)} Point.*)\n\n` : isTie ? `Permainan telah berakhir (+ *${Func.formatNumber(playScore)} Point.*)\n\n` : `Sekarang giliran ${['❌', '⭕'][1 * room.game._currentTurn]} : @${room.game.currentTurn.split`@`[0]} belok.\n\n`}`
      str += `❌ : @${room.game.playerX.split`@`[0]}\n`
      str += `⭕ : @${room.game.playerO.split`@`[0]}\n`
      str += `*Room ID* : ${room.id}\n`
      str += `Kirim *${global.db.setting.multiprefix ? global.db.setting.prefix[0] : global.db.setting.onlyprefix}nyerah* untuk menyerah dan mengakui kekalahan.`
      let users = global.db.users
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
         room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
      if (room.x !== room.o) await client.fakeStory(room.x, str, 'JUST FOR FUN')
      await client.fakeStory(room.o, str, 'JUST FOR FUN')
      if (isTie || isWin) {
         users[room.game.playerX].point += playScore
         users[room.game.playerO].point += playScore
         if (isWin) users[winner].point += reward - playScore
         delete client.game[room.id]
        }
        }
        } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}