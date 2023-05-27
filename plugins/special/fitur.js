exports.run = {
   usage: ['totalfitur'],
   category: 'about',
   async: async (m, {
      client,
      participants
   }) => {
      let opo = Func.arrayJoin(Object.values(Object.fromEntries(Object.entries(global.client.plugins).filter(([name, prop]) => prop.run.usage))).map(v => v.run.usage)).length
      oh = `*Terdeteksi jumlah fitur saat ini ${opo} fitur.*`
      await client.reply(m.chat, oh, m)
   },
   error: false
}