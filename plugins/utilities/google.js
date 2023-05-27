exports.run = {
   usage: ['google', 'goimg'],
   use: 'query',
   category: 'searching',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'cat'), m)
         client.sendReact(m.chat, '🕒', m.key)
         if (command == 'google') {
            let json = await Api.google(text)
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
            let teks = `*GOOGLE SEARCH*\n\n`
            json.data.map((v, i) => {
               teks += '*' + (i + 1) + '. ' + v.title + '*\n'
               teks += '◦  *Snippet* : ' + v.description + '\n'
               teks += '◦  *Link* : ' + v.url + '\n\n'
            })
            client.sendMessageModify(m.chat, teks + global.footer, m, {
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://i.ibb.co/2ZTr9Cn/IMG-20221209-052817-412.jpg')
            })
         } else if (command == 'goimg') {
            let json = await Api.google(text, true)
            if (!json.status) return client.reply(m.chat, global.status.fail, m)
            for (let i = 0; i < 5; i++) {
               var rand = Math.floor(json.data.length * Math.random())
               let caption = `*GOOGLE IMAGE*\n\n`
               caption += `◦ *Title* : ${json.data[i].origin.title}\n`
               caption += `◦ *Dimensions* : ${json.data[i].width} × ${json.data[i].height}\n\n`
               caption += global.footer
               client.sendFile(m.chat, json.data[rand].url, '', caption, m)
               await Func.delay(2500)
            }
         }
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   restrict: true
}