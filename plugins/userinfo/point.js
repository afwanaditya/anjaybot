exports.run = {
   usage: ['point'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix
   }) => {
      let user = global.db.users.find(v=> v.jid == m.sender)
      if (user.point < 1) return client.reply(m.chat, `*Kamu tidak mempunyai point.*`, m)
      client.reply(m.chat, Func.texted('bold', `Kamu mempunyai point sebanyak ${h2k(Func.formatNumber(user.point))} (${Func.formatNumber(user.point)}) point.`), m)
   },
   error: false
}

h2k = (str) => {
      try {
         let SIPOSTFIXES = ['', ' K', ' Juta', ' M', ' T', ' KD', ' KN']
         let dot = str.match(/./g)
         let split = str.split('.')
         let zero = parseInt(split[1].substring(1, -split[1].length))
         let postfix
         for (let i = 0; i < SIPOSTFIXES.length; i++)
            if (dot.filter(v => v == '.').length == i) postfix = SIPOSTFIXES[i]
         switch (true) {
            case zero != 0:
               var output = split[0] + '.' + zero + postfix
               break
            default:
               var output = split[0] + postfix
         }
         return output
      } catch {
         return str
      }
   }