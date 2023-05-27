const axios = require('axios')
exports.run = {
   usage: ['ts', 'telestik', 'telesticker'],
   use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         let exif = global.db.setting
         if (!args || !args[0]) return client.reply(m.chat, `• ${Func.texted('bold', `Example`)} : ${isPrefix + command} https://t.me/addstickers/NonromanticBear`, m)
         client.reply(m.chat, global.status.getdata, m)
         let json = await teleSticker(args[0])
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         client.reply(m.chat, `Stiker ditemukan sebanyak ${json.data.length}\nsedang dikirim...`)
         for (let i = 0; i < json.data.length; i++) {
            client.sendSticker(m.chat, await Func.fetchBuffer(json.data[i].url), m, {
               pack: exif.sk_pack,
               author: exif.sk_author
            })
            await Func.delay(2000)
         }
         await client.reply(m.chat, Func.texted('bold', `Selesai...`), m)
      } catch (e) {
         console.log(e)
         client.reply(m.chat, require('util').format(e), m)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   private: true,
   cache: true,
   location: __filename
}


  function teleSticker(url) {
      return new Promise(async (resolve, reject) => {
         try {
            let packname = url.replace('https://t.me/addstickers/', '')
            let json = await (await axios.get(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packname)}`, {
               headers: {
                  'User-Agent': 'GoogleBot'
               }
            })).data
            let data = []
            let id = json.result.stickers.map(v => v.thumb.file_id)
            for (let i = 0; i < id.length; i++) {
               let path = await (await axios.get(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${id[i]}`)).data
               data.push({
                  url: 'https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/' + path.result.file_path
               })
            }
            resolve({
               creator: global.creator,
               status: true,
               data
            })
         } catch (e) {
            console.log(e)
            return resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }