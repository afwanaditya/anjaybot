exports.run = {
   usage: ['confirmorderkunci'],
   use: 'number | target',
   
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
try {      	
let q = text
let jumlah = q.split('|')[0] ? q.split('|')[0]: ''
let targ = q.split('|')[1] ? q.split('|')[1]: ''
let idny = q.split('|')[2] ? q.split('|')[2]: ''
var feta = await Func.fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=3NfgLjuVoTknVUgwBK28szOwRWYPdS&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
if (feta.status == false) {
  m.reply(`*Maaf orderan gagal di buat*\n\nMasalah :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik owner!\n`)
} else {
let idpes = feta.data.order_id
let cap = `Hai Terimakasih Telah Order di DStore!\nScan QR diatas untuk membayar! Menggunakan QRIS.\n\n*ID Pesanan :*\n${feta.data.order_id}\n\n*Target :*\n${targ}\n\n*Jumlah Order :* ${jumlah}\n*Total Harga :* Rp${h2k(Func.formatNumber(feta.data.amount))}\n*Status Orderan :* ${feta.data.status}\n\n*info lebih lanjut? hubungi owner*`
client.sendFile(m.chat, feta.data.qris, '', cap, m)
}
console.log(feta)
      } catch (e) {
         return client.reply(m.chat, String(e), m)
     }
   },
   error: false,
   owner: true
}

h2k = (str) => {
      try {
         let SIPOSTFIXES = ['', ' K', ' Juta', ' M', ' T', ' KD', ' KN']
         let dot = str.match(/./g)
         let split = str.split('.')
         let zero = parseInt(split[1].substring(1, -split[1].length))
         let postfix
         for (let i = 0; i < SIPOSTFIXES.length; i++)
            if (dot.filter(v => v == '.').length == i) postfix = SIPOSTFIXES[i]
         switch (true) {
            case zero != 0:
               var output = split[0] + '.' + zero + postfix
               break
            default:
               var output = split[0] + postfix
         }
         return output
      } catch {
         return str
      }
   }