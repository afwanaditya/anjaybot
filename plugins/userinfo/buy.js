exports.run = {
   usage: ['buy', 'buyall'],
   category: 'user info',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         let user = global.db.users.find(v => v.jid == m.sender),
            maximum = 1000,
            price = 500000
         if (user.limit >= maximum) return client.reply(m.chat, Func.texted('bold', `Sorry, you can't buy any more limits because you have reached maximum limit.`), m)
         if (command == 'buyall') {
            if (user.point < price) return client.reply(m.chat, Func.texted('bold', `You don't have enough points to buy limit.`), m)
            let amount = (user.point / price).toFixed(0)
            if ((user.limit + parseInt(amount)) >= maximum) return client.reply(m.chat, Func.texted('bold', `Sorry, you can't buy any more limits because you have reached maximum limit.`), m)
            user.point -= price * parseInt(amount)
            user.limit += parseInt(amount)
            return client.reply(m.chat, `✅ Kamu telah menukar *${amount}* limit dengan *${Func.h2k(price * parseInt(amount))}* points.`, m)
         } else if (command == 'buy') {
            if (isNaN(args[0])) return client.reply(m.chat, Func.example(isPrefix, command, '1'), m)
            if (args[0] < 1) return client.reply(m.chat, Func.example(isPrefix, command, '1'), m)
            if (user.point >= price * parseInt(args[0])) {
               if ((user.limit + parseInt(args[0])) >= maximum) return client.reply(m.chat, Func.texted('bold', `Limit yang kamu masukkan melebihi batas.`), m)
               user.point -= price * parseInt(args[0])
               user.limit += parseInt(args[0])
               return client.reply(m.chat, `✅ Kamu telah menukar *${args[0]}* limit dengan *${Func.h2k(price * args[0])}* points.`, m)
            } else {
               client.reply(m.chat, Func.texted('bold', `Point kamu tidak cukup untuk menukar ${Func.formatNumber(args[0])} limit.`), m)
            }
         }
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false
}