exports.run = {
   usage: ['sider'],
   use: '(option)',
   category: 'admin grup',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      participants,
      isBotAdmin
   }) => {
      try {
         let member = participants.filter(u => u.admin == null).map(u => u.id)
         var day = 86400000 * 7,
            now = new Date() * 1
         var sider = []
         member.filter(jid => {
            if (!global.db.users.some(v => v.jid == jid) && typeof global.db.groups.find(v => v.jid == m.chat).member[jid] === 'undefined' && jid != client.decodeJid(client.user.id)) sider.push(jid)
         })
         var lastseen = Object.entries(global.db.groups.find(v => v.jid == m.chat).member).filter(([jid, data]) => data.lastseen).sort((a, b) => a[1].lastseen - b[1].lastseen).filter(([v, x]) => x.lastseen != 0 && ((now - x.lastseen > day) || (now - global.db.users.find(c => c.jid == v).lastseen > day)) && (global.db.users.some(c => c.jid == v) && !global.db.users.find(c => c.jid == v).premium && !global.db.users.find(c => c.jid == v).whitelist) && v != client.decodeJid(client.user.id))
         if (args && args[0] == '-y') {
            if (!isBotAdmin) return client.reply(m.chat, global.status.botAdmin, m)
            let arr = Object.entries(lastseen).map(([jid, _]) => jid).concat(sider)
            if (arr.length == 0) return client.reply(m.chat, Func.texted('bold', `Alhamdulillah gaada sider.`), m)
            for (let jid of arr) {
               await Func.delay(2000)
               await client.groupParticipantsUpdate(m.chat, [jid], 'remove')
            }
            await client.reply(m.chat, Func.texted('bold', `Selesai, ${arr.length} sider udah berhasil dihapus.`), m)
         } else {
            if (sider.length == 0 && lastseen.length == 0) return client.reply(m.chat, Func.texted('bold', `Alhamdulillah gaada sider.`), m)
            let teks = ` *S I D E R*\n\n`
            teks += sider.length == 0 ? '' : `“List of *${sider.length}* member yang tidak ada aktivitas.”\n\n`
            teks += sider.length == 0 ? '' : sider.map(v => '  ◦  @' + v.replace(/@.+/, '')).join('\n')
            teks += '\n\n'
            teks += lastseen.length == 0 ? '' : `“List of *${lastseen.length}* member tidak onlen seminggu.”\n\n`
            teks += lastseen.length == 0 ? '' : lastseen.map(([v, x]) => ' ◦  @' + v.replace(/@.+/, '') + '\n       *Lastseen* : ' + Func.toDate(now - x.lastseen).split('D')[0] + ' days ago').join('\n')
            teks += `\n\n*Note* : Fitur ini akurat jika bot telah berada selama 1 minggu di grup, kirim *${isPrefix + command} -y*untuk menendang mereka.`
            teks += `\n\n${global.footer}`
            client.reply(m.chat, teks, m)
         }
      } catch (e){
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   admin: true,
   group: true
}