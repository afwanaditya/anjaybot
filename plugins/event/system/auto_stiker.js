exports.run = {
   async: async (m, {
     client,
      body,
      chats,
   }) => {
      try {
      let q = m
      let mime = (q.msg || q).mimetype || ''
      let exif = global.db.setting
      Func.hitstat('stiker', m.sender)
      if (/image/.test(mime)) {
           let img = await q.download()
           return await client.sendSticker(m.chat, img, m, {
                     packname: exif.sk_pack,
                     author: exif.sk_author
                  })
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