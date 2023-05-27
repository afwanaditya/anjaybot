exports.run = {
   usage: ['songclue'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.tebaklagu = client.tebaklagu ? client.tebaklagu : {}
      let id = m.chat
      if (!(id in client.tebaklagu)) return
      let json = client.tebaklagu[id][1]
      let nya = json.jawaban
      let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
      client.reply(m.chat, '```' + nyanya + '```', m)
   },
   
}