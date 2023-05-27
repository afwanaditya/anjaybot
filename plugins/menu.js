exports.run = {
   usage: ['menu', 'help', 'start', 'mulai', 'command'],
   hidden: ['menutype'],
   async: async (m, {
      client,
      text,
      isPrefix
   }) => {
      try {
         const style = global.db.setting.menuStyle
         if (style == 1) {
            if (text) {
               let cmd = Object.entries(client.plugins).filter(([_, v]) => v.run.usage && v.run.category == text.toLowerCase())
               let usage = Object.keys(Object.fromEntries(cmd))
               if (usage.length == 0) return client.reply(m.chat, Func.texted('bold', `Kategori Tidak Tersedia.`), m)
               let commands = []
               cmd.map(([_, v]) => {
                  switch (v.run.usage.constructor.name) {
                     case 'Array':
                        v.run.usage.map(x => commands.push({
                           usage: x,
                           use: v.run.use ? Func.texted('bold', v.run.use) : ''
                        }))
                        break
                     case 'String':
                        commands.push({
                           usage: v.run.usage,
                           use: v.run.use ? Func.texted('bold', v.run.use) : ''
                        })
                  }
               })
               const print = commands.sort((a, b) => a.usage.localeCompare(b.usage)).map(v => `◦  ${isPrefix + v.usage} ${v.use}`).join('\n')
               return m.reply(print)
            } else {
               let filter = Object.entries(client.plugins).filter(([_, obj]) => obj.run.usage)
               let cmd = Object.fromEntries(filter)
               let category = []
               for (let name in cmd) {
                  let obj = cmd[name].run
                  if (!cmd) continue
                  if (!obj.category) continue
                  if (Object.keys(category).includes(obj.category)) category[obj.category].push(obj)
                  else {
                     category[obj.category] = []
                     category[obj.category].push(obj)
                  }
               }
               let rows = []
               const keys = Object.keys(category).sort()
               for (let k of keys) {
                  rows.push({
                     title: k.toUpperCase(),
                     rowId: `${isPrefix}menutype ${k}`,
                     description: ``
                  })
               }
               await client.sendList(m.chat, '', global.db.setting.msg.replace('+tag', `@${m.sender.replace(/@.+/g, '')}`).replace('+name', m.pushName).replace('+greeting', Func.greeting()), global.botname, 'KLIK DISINI │ @dandisubhani_', [{
                  rows
               }], m)
            }
         } else if (style == 2) {
            let filter = Object.entries(client.plugins).filter(([_, obj]) => obj.run.usage)
            let cmd = Object.fromEntries(filter)
            let category = []
            for (let name in cmd) {
               let obj = cmd[name].run
               if (!cmd) continue
               if (!obj.category) continue
               if (Object.keys(category).includes(obj.category)) category[obj.category].push(obj)
               else {
                  category[obj.category] = []
                  category[obj.category].push(obj)
               }
            }
            const keys = Object.keys(category).sort()
            let print = global.db.setting.msg.replace('+tag', `@${m.sender.replace(/@.+/g, '')}`).replace('+name', m.pushName).replace('+greeting', Func.greeting())
            
            for (let k of keys) {
               print += '\n\n–  *' + k.toUpperCase().split('').map(v => v).join(' ') + '*\n\n'
               let cmd = Object.entries(client.plugins).filter(([_, v]) => v.run.usage && v.run.category == k.toLowerCase())
               let usage = Object.keys(Object.fromEntries(cmd))
               if (usage.length == 0) return
               let commands = []
               cmd.map(([_, v]) => {
                  switch (v.run.usage.constructor.name) {
                     case 'Array':
                        v.run.usage.map(x => commands.push({
                           usage: x,
                           use: v.run.use ? Func.texted('bold', v.run.use) : ''
                        }))
                        break
                     case 'String':
                        commands.push({
                           usage: v.run.usage,
                           use: v.run.use ? Func.texted('bold', v.run.use) : ''
                        })
                  }
               })
               print += commands.sort((a, b) => a.usage.localeCompare(b.usage)).map(v => `   ◦  ${isPrefix + v.usage} ${v.use}`).join('\n')
            }
            client.sendMessageModify(m.chat, print + '\n\n' + global.footer, m, {
               ads: false,
               largeThumb: true,
               url: global.db.setting.link
            })
         } else if (style == 3) {
            if (text) {
               let cmd = Object.entries(client.plugins).filter(([_, v]) => v.run.usage && v.run.category == text.toLowerCase())
               let usage = Object.keys(Object.fromEntries(cmd))
               if (usage.length == 0) return client.reply(m.chat, Func.texted('bold', `Kategori Tidak Tersedia.`), m)
               let commands = []
               cmd.map(([_, v]) => {
                  switch (v.run.usage.constructor.name) {
                     case 'Array':
                        v.run.usage.map(x => commands.push({
                           usage: x,
                           use: v.run.use ? Func.texted('bold', v.run.use) : ''
                        }))
                        break
                     case 'String':
                        commands.push({
                           usage: v.run.usage,
                           use: v.run.use ? Func.texted('bold', v.run.use) : ''
                        })
                  }
               })
               const print = commands.sort((a, b) => a.usage.localeCompare(b.usage)).map((v, i) => {
                  if (i == 0) {
                     return `┌  ◦  ${isPrefix + v.usage} ${v.use}`
                  } else if (i == commands.sort((a, b) => a.usage.localeCompare(b.usage)).length - 1) {
                     return `└  ◦  ${isPrefix + v.usage} ${v.use}`
                  } else {
                     return `│  ◦  ${isPrefix + v.usage} ${v.use}`
                  }
               }).join('\n')
               return m.reply(print)
            } else {
               let filter = Object.entries(client.plugins).filter(([_, obj]) => obj.run.usage)
               let cmd = Object.fromEntries(filter)
               let category = []
               for (let name in cmd) {
                  let obj = cmd[name].run
                  if (!cmd) continue
                  if (!obj.category) continue
                  if (Object.keys(category).includes(obj.category)) category[obj.category].push(obj)
                  else {
                     category[obj.category] = []
                     category[obj.category].push(obj)
                  }
               }
               let rows = []
               const keys = Object.keys(category).sort()
               for (let k of keys) {
                  rows.push({
                     title: k.toUpperCase(),
                     rowId: `${isPrefix}menutype ${k}`,
                     description: ``
                  })
               }
/*const yts = require('yt-search')
const yg = await yts('https://youtu.be/e1IqZzZqGXo')
const cap = `*-------[ PROMOTION]-------*

• *Judul :* ${yg.all[0].title}
• *Durasi :* ${yg.all[0].timestamp} 
• *Viewers:* ${yg.all[0].views}x   
• *Di Upload :* ${yg.all[0].ago}
• *Author :* ${yg.all[0].author.name}  
• *Description :* ${yg.all[0].description}
  
*Yuk tonton dengan cara klik Thumbnail di atas ☝*
_Note : Detail video akan terupdate otomatis oleh Bot_`
              await client.sendMessageModify(m.chat, cap, m, {
ads: true,
largeThumb: true,
url: 'https://s.id/lembur_'
})*/
               await client.sendList(m.chat, '', global.db.setting.msg.replace('+tag', `@${m.sender.replace(/@.+/g, '')}`).replace('+name', m.pushName).replace('+greeting', Func.greeting()), global.botname, 'KLIK DISINI │ @dandisubhani_', [{
                  rows
               }], m)
            }
         } else if (style == 4) {
            let filter = Object.entries(client.plugins).filter(([_, obj]) => obj.run.usage)
            let cmd = Object.fromEntries(filter)
            let category = []
            for (let name in cmd) {
               let obj = cmd[name].run
               if (!cmd) continue
               if (!obj.category) continue
               if (Object.keys(category).includes(obj.category)) category[obj.category].push(obj)
               else {
                  category[obj.category] = []
                  category[obj.category].push(obj)
               }
            }
            const keys = Object.keys(category).sort()
            let print = global.db.setting.msg.replace('+tag', `@${m.sender.replace(/@.+/g, '')}`).replace('+name', m.pushName).replace('+greeting', Func.greeting())
            print += '\n' + String.fromCharCode(8206).repeat(4001)
            for (let k of keys) {
               print += '\n\n–  *' + k.toUpperCase().split('').map(v => v).join(' ') + '*\n\n'
               let cmd = Object.entries(client.plugins).filter(([_, v]) => v.run.usage && v.run.category == k.toLowerCase())
               let usage = Object.keys(Object.fromEntries(cmd))
               if (usage.length == 0) return
               let commands = []
               cmd.map(([_, v]) => {
                  switch (v.run.usage.constructor.name) {
                     case 'Array':
                        v.run.usage.map(x => commands.push({
                           usage: x,
                           use: v.run.use ? Func.texted('bold', v.run.use) : ''
                        }))
                        break
                     case 'String':
                        commands.push({
                           usage: v.run.usage,
                           use: v.run.use ? Func.texted('bold', v.run.use) : ''
                        })
                  }
               })
               print += commands.sort((a, b) => a.usage.localeCompare(b.usage)).map((v, i) => {
                  if (i == 0) {
                     return `┌  ◦  ${isPrefix + v.usage} ${v.use}`
                  } else if (i == commands.sort((a, b) => a.usage.localeCompare(b.usage)).length - 1) {
                     return `└  ◦  ${isPrefix + v.usage} ${v.use}`
                  } else {
                     return `│  ◦  ${isPrefix + v.usage} ${v.use}`
                  }
               }).join('\n')
            }
            client.sendMessageModify(m.chat, print + '\n\n' + global.footer, m, {
               ads: false,
               largeThumb: true,
               url: global.db.setting.link
            })
         }
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false
}