exports.run = {
   usage: ['mute'],
   use: '0 / 1',
   category: 'admin grup',
   async: async (m, {
      args,
      isPrefix,
      command
   }) => {
      let gc = global.db.groups.find(v => v.jid == m.chat)
      let opt = [0, 1]
      let rows = [{
         title: 'True',
         rowId: `${isPrefix + command} 1`,
         description: ``
      }, {
         title: 'False',
         rowId: `${isPrefix + command} 0`,
         description: ``
      }]
      if (!args || !args[0] || !opt.includes(parseInt(args[0]))) return client.sendList(m.chat, '', `*Status* : [ ${gc.mute ? 'True' : 'False'} ]`, '', 'Klik disini ea!', [{ rows }], m)
      if (parseInt(args[0]) == 1) {
         if (gc.mute) return client.reply(m.chat, Func.texted('bold', `muted.`), m)
         gc.mute = true
         client.reply(m.chat, Func.texted('bold', `berhasil dimuted.`), m)
      } else if (parseInt(args[0]) == 0) {
         if (!gc.mute) return client.reply(m.chat, Func.texted('bold', `unmuted.`), m)
         gc.mute = false
         client.reply(m.chat, Func.texted('bold', `berhasil diunmuted.`), m)
      }
   },
   admin: true,
   group: true,
   cache: true,
   location: __filename
}