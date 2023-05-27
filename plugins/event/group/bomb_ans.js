exports.run = {
   async: async (m, {
      client,
      body,
      chats,
      setting,
      users
   }) => {
      try {
    let reward = randomInt(500, 500000)
    id = m.chat
    client.bomb = client.bomb ? client.bomb : {}
   if (!(id in client.bomb) && m.quoted && /kotak/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `Sesi telah berakhir, silahkan kirim _${global.db.setting.multiprefix ? global.db.setting.prefix[0] : global.db.setting.onlyprefix}bomb_ untuk membuat sesi baru.`), m)
   if ((id in client.bomb) && !isNaN(body)) {
      let timeout = 180000
      let json = client.bomb[id][1].find(v => v.position == body)
      if (!json) return client.reply(m.chat, Func.texted('bold', `Untuk membuka kotak kirim angka 1 - 9`), m)
      if (json.emot == '💥') {
         json.state = true
         let bomb = client.bomb[id][1]
         let teks = `*B O M B*\n\n`
         teks += `Duaarrr ..... :v!\n\n`
         teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
         teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
         teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
         teks += `Timeout : [ *${((timeout / 1000) / 60)} minutes* ]\n`
         teks += `*Permainan selesai!*, kotak berisi bom terbuka : (- *${Func.formatNumber(reward)}*)`
         return client.sendMessageModify(m.chat, teks, m, {
            thumbnail: 'https://telegra.ph/file/287cbe90fe5263682121d.jpg',
            largeThumb: true
         }).then(() => {
            global.db.users[m.sender].point < reward ? global.db.users[m.sender].point = 0 : global.db.users[m.sender].point -= reward
            clearTimeout(client.bomb[id][2])
            delete client.bomb[id]
         })
      } else if (json.state) {
         return client.reply(m.chat, Func.texted('bold', `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain.`), m)
      } else {
         json.state = true
         let changes = client.bomb[id][1]
         let open = changes.filter(v => v.state && v.emot != '💥').length
         if (open >= 8) {
            let teks = `*B O M B*\n\n`
            teks += `Kirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`
            teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
            teks += `Timeout : [ *${((timeout / 1000) / 60)} minutes* ]\n`
            teks += `*Permainan selesai!* kotak berisi bom tidak terbuka : (+ *${Func.formatNumber(reward)}*)`
            return client.sendMessageModify(m.chat, teks, m, {
               thumbnail: 'https://telegra.ph/file/308a4f10cc4576a90b4a0.jpg',
               largeThumb: true
            }).then(() => {
               global.db.users[m.sender].point += reward
               clearTimeout(client.bomb[id][2])
               delete client.bomb[id]
            })
         } else {
            let teks = `*B O M B*\n\n`
            teks += `Kirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`
            teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
            teks += `Timeout : [ *${((timeout / 1000) / 60)} minutes* ]\n`
            teks += `Kotak berisi bom tidak terbuka : (+ *${Func.formatNumber(reward)}*)`
            client.reply(m.chat, teks, m).then(() => {
               global.db.users[m.sender].point += reward
            })
         }
      }
   }
      } catch (e) {
         console.log(e)
      }
   },
   error: false,
   group: false,
   cache: true,
   location: __filename
}

   function random(list) {
      return list[Math.floor(Math.random() * list.length)]
   }

   function randomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
   }

   function ucword(str) {
      return (str + '').replace(/^([a-z])|\s+([a-z])/g, function($1) {
         return $1.toUpperCase();
      })
   }