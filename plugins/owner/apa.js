exports.run = {
   usage: ['follower', 'like', 'view'],
   use: 'number | target',
   
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {           
     try {
let juma = text.split('|')[0] ? text.split('|')[0]: ''
let targtt = text.split('|')[1] ? text.split('|')[1]: ''
if (targtt.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh : ${isPrefix + command} 500| @dandisubhani_`)
let json = await Func.fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=3NfgLjuVoTknVUgwBK28szOwRWYPdS&action=pricelist&type=${command}`)
            let rows = []
            let textplus = `${juma}|${targtt}`
            json.data.map(async (v, i) => {
               rows.push({
                  title: v.nama,
                  rowId: `${isPrefix}confirmorderkunci ${textplus}|${v.id_layanan}`,
                  description: `[ ${v.desc} | ${h2k(Func.formatNumber(v.price))} ]`
               })
            })
            client.sendList(m.chat, '', `Pilih Layanan yang tersedia`, '', 'Klik Disini!', [{
               rows
            }], m)
    } catch (e) {
    client.reply(m.chat, String(e), m)
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