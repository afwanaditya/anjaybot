const path = require('path')
exports.run = {
   async: async (m, {
      client,
      body,
      chats,
      setting
   }) => {
      try { 
          if (body && !global.evaluate_chars.some(v => body.startsWith(v))) {
 const simi = await global.component.Scraper.simsimi(body)

         if (!simi.msg) return client.reply(m.chat, ':v', m)
         //const ph = pg[Math.floor(Math.random() * pg.length)]
         if (!m.fromMe && setting.chatbot) return client.reply(m.chat, `Simi : ` + simi.msg, m)
      }
      } catch (e) {
         console.log(e)
      }
   },
   error: false,
   private: true,
   cache: true,
   location: __filename
}