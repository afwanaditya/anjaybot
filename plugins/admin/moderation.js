exports.run = {
   usage: ['antidelete', 'antilink', 'antivirtex', 'captcha', 'left', 'filter', 'localonly', 'welcome'],
   use: 'on / off',
   category: 'admin grup',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      isBotAdmin
   }) => {
      let setting = global.db.groups.find(v => v.jid == m.chat)
      let rows = [{
         title: Func.ucword(command),
         rowId: `${isPrefix + command} on`,
         description: `[ Status : ON ]`
      }, {
         title: Func.ucword(command),
         rowId: `${isPrefix + command} off`,
         description: `[ Status : OFF ]`
      }]
      let type = command.toLowerCase()
      if (!isBotAdmin && /antilink|captcha|antivirtex|filter|localonly/.test(type)) return client.reply(m.chat, global.status.botAdmin, m)
      if (!args || !args[0]) return client.sendList(m.chat, '', `*Status* : [ ${setting[type] ? 'ON' : 'OFF'} ]`, '', 'Klik disini ea!', [{
         rows
      }], m)
      let option = args[0].toLowerCase()
      let optionList = ['on', 'off']
      if (!optionList.includes(option)) return client.sendList(m.chat, '', `Status* : [ ${setting[type] ? 'ON' : 'OFF'} ]`, '', 'Klik disini ea!', [{
         rows
      }], m)
      let status = option != 'on' ? false : true
      if (setting[type] == status) return client.reply(m.chat, Func.texted('bold', `${Func.ucword(command)} telah ${option == 'on' ? 'activated' : 'inactivated'}`), m)
      setting[type] = status
      client.reply(m.chat, Func.texted('bold', `${Func.ucword(command)} telah ${option == 'on' ? 'activated' : 'inactivated'} `), m)
   },
   admin: true,
   group: true,
   cache: true,
   location: __filename
}