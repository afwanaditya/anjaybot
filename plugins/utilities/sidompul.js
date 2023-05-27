const fetch = require('node-fetch')
const util = require('util')
exports.run = {
   usage: ['sidompul'],
   use: 'nomor',
   category: 'searching',
   async: async (m, {
      client,
      isPrefix,
      args,
      command
   }) => {
try {       
if (!args[0]) return client.reply(m.chat, 'masukkan nomor XL (08 / 62)', m)
              res = await fetch('https://sidompul.cloudaccess.host/cek.php?nomor=' + args[0])
              if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
              delete res
              throw `Content-Length: ${res.headers.get('content-length')}`
              }
              if (!/text|json/.test(res.headers.get('content-type'))) return client.sendFile(m.chat, args[0], '', ``, m)                       
              txtx = await res.buffer()
              try {
              txtx = util.format(JSON.parse(txtx+''))
              } catch (e) {
              txtx = txtx + ''
              } finally {
              client.reply(m.chat, txtx.slice(0, 65536) + '', m)
              }
      } catch (e) {
         return client.reply(m.chat, String(e), m)
     }
   },
   error: false,
}

