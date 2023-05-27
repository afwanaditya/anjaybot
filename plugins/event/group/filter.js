exports.run = {
   async: async (m, {
      client,
      body,
      users,
      groupSet,
      setting,
      isAdmin,
      isBotAdmin
   }) => {
      try {
         if (groupSet.filter && !isAdmin && isBotAdmin && !m.fromMe) {
            let toxic = setting.toxic
            if (body && (new RegExp('\\b' + toxic.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {
               groupSet.member[m.sender].warning += 1
               let warning = groupSet.member[m.sender].warning
               if (warning > 4) return client.reply(m.chat, Func.texted('bold', `Suda kelewat batas ini orang, utiwi tendang...`), m).then(() => {
                  client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then(async () => {
                     groupSet.member[m.sender].warning = 0
                     client.sendMessage(m.chat, {
                        delete: {
                           remoteJid: m.chat,
                           fromMe: isBotAdmin ? false : true,
                           id: m.key.id,
                           participant: m.sender
                        }
                     })
                  })
               })
               return client.reply(m.chat, `*PERINGATIN* \n\nEnte dapet PERINGATAN : [ ${warning} / 5 ]\n\Kalo nte toxic lagi, bakalan ane tendang dari grup aowkwok.`, m).then(() => client.sendMessage(m.chat, {
                  delete: {
                     remoteJid: m.chat,
                     fromMe: isBotAdmin ? false : true,
                     id: m.key.id,
                     participant: m.sender
                  }
               }))
            }
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   group: true
}