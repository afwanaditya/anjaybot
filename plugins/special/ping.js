const NetworkSpeed = require('network-speed')
const test = new NetworkSpeed()
const { tmpdir } = require('os')
const os = require('os')
const moment = require('moment-timezone')
exports.run = {
   usage: ['ping'],
      async: async (m, {
      client
   }) => {
      let old = new Date()
      let download = await getNetworkDownloadSpeed()
      async function getNetworkDownloadSpeed() {
         const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000'
         const fileSizeInBytes = 500000
         const speed = await test.checkDownloadSpeed(baseUrl, fileSizeInBytes)
         return speed
      }
      let upload = await getNetworkUploadSpeed()
      async function getNetworkUploadSpeed() {
         const options = {
            hostname: 'www.google.com',
            port: 80,
            path: tmpdir(),
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            }
         }
         const fileSizeInBytes = 2000000
         const speed = await test.checkUploadSpeed(options, fileSizeInBytes)
         return speed
      }

            const titit1 = moment().millisecond()
            function format(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);

             return pad(hours) + ' Jam, ' + pad(minutes) + ' Menit, ' + pad(seconds) + ' Detik';
              }
            var uptime = process.uptime();
            const used = process.memoryUsage()
            const titit = moment().millisecond()
                client.reply(m.chat, Func.texted('monospace',`❏ 『 S P E E D 』

◦ Response : ${((new Date - old) * 1)} ms
◦ Download : ${download.mbps} mbps
◦ Upload :  ${upload.mbps} mbps
◦ Latency : ${titit1} Ms

❏ 『 R U N T I M E 』

${format(uptime)}

❏ 『 S E R V E R 』

❍ HOST : ${os.hostname()}
❍ PLATFORM : ${os.platform()}
❍ SPEED : ${os.cpus()[0].speed} MHz
❍ CORE : ${os.cpus().length}
❍ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
❍ N.Latency : ${titit} Ms`), m)
   },
   error: false,
   cache: true,
   location: __filename
}