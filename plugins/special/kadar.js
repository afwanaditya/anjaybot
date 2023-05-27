exports.run = {
   usage: ['kadar'],
   category: 'random text',
   async: async (m, {
      client,
      args,
      isPrefix,
      text
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, 'query yang tersedia adalah \n1.gay\n2.lesbi\n3.kegilaan\n4.kegantengan\n5.kecantikan', m)
         if (args[0] == 'gay') {
         let name = text
         const random = await Math.floor(Math.random() * (1000 - 1) + 1)
         if(random < 150) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Aman`, m)
         if(random < 500) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Hati Hati Sama Dia `,id)
         if(random < 750) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%.\n*Desc* : Dah ngegay ama siapa aja`, m)
         if(random <= 1000) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Amnjinc kabur cokk ada gayyy!!!!`, m)
         } else if (args[0] == 'bucin') {
         let name = text
         const random = await Math.floor(Math.random() * (1000 - 1) + 1)
         if(random < 150) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Biasa`, m)
         if(random < 500) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Lumayan nih `,id)
         if(random < 750) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%.\n*Desc* : Kerjaannya ngebucin terus ya?`, m)
         if(random <= 1000) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Wah inimah bucin tingkat akut coy!! `, m)
         } else if (args[0] == 'lesbi') {
         let name = text
         const random = await Math.floor(Math.random() * (1000 - 1) + 1)
         if(random < 150) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Normal`, m)
         if(random < 500) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Bjir Lesbi,Hati"`,id)
         if(random < 750) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%.\n*Desc* : Awas, Dia Lesbian cok!!!`, m)
         if(random <= 1000) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Mending lu jangan deketin dia,bahaya!!`, m)
         } else if (args[0] == 'kegantengan') {
         const random = await Math.floor(Math.random() * (1000 - 1) + 1)
         if(random < 150) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Buriq aowkwkwk`, m)
         if(random < 500) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Anjay mirip mang oleh`,id)
         if(random < 750) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%.\n*Desc* : dah disukain berapa cewe mas?`, m)
         if(random <= 1000) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Wah inimah,fir'aun kalah gantengnya`, m)
         } else if (args[0] == 'kecantikan') {
         let name = text
         const random = await Math.floor(Math.random() * (1000 - 1) + 1)
         if(random < 150) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : hmm,mirip siapa yah?`, m)
         if(random < 500) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : lumayan geulis xixixi`,id)
         if(random < 750) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%.\n*Desc* : Kiw, hai cewe cantik amat nich`, m)
         if(random <= 1000) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : cantik banget kamuuuuuu,aaaaaaaaaaa <3 `, m)
         } else if (args[0] == 'kegilaan') {
         let name = text
         const random = await Math.floor(Math.random() * (1000 - 1) + 1)
         if(random < 150) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Aman cok,lu ga gila`, m)
         if(random < 500) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* :  Njir,Lu kurang waras dikit`,id)
         if(random < 750) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%.\n*Desc* : Hati"cok,ni orang wajib dibawa ke RSJ`, m)
         if(random <= 1000) return client.reply(m.chat, `Tingkat ${name} adalah ${random}%\n*Desc* : Inimah Gila banget, RSJ pada gamau nerima dia`, m)  
         }
      } catch (e) {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}