exports.run = {
   usage: ['songskip'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.tebaklagu = client.tebaklagu ? client.tebaklagu : {}
      let id = m.chat
      if (!(id in client.tebaklagu)) return
      clearTimeout(client.tebaklagu[id][3])
      delete client.tebaklagu[id]
      client.reply(m.chat, Func.texted('bold', `Sesi permainan whatsong telah dihapus.`), m)
   },
   
}