exports.run = {
   usage: ['pacaran', 'relation', 'tembak', 'acc', 'tolak', 'putus', 'batal'],
   use: 'mention or reply',
   category: 'group',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
      let member = participants.map(v => v.id)
      if (/pacaran|relation/.test(command)) return client.reply(m.chat, explain(isPrefix), m) //global.db.setting.header, m)
      if (command == 'putus') {
         if (typeof global.db.users[m.sender] == 'undefined' || !global.db.users[m.sender].taken) return client.reply(m.chat, `*Kamu tidak sedang menjalin hubungan dengan siapapun.*`, m)
         return client.reply(m.chat, `*Berhasil putus hubungan dengan @${global.db.users[m.sender].pasangan.split('@')[0]}*`, m).then(() => {
            global.db.users[global.db.users[m.sender].pasangan].taken = false
            global.db.users[global.db.users[m.sender].pasangan].pasangan = ''
            global.db.users[m.sender].taken = false
            global.db.users[m.sender].pasangan = ''
         })
      } else if (command == 'batal') {
         if (global.db.users[m.sender].taken) return client.reply(m.chat, `*Kamu sedang berpacaran dengan @${global.db.users[m.sender].pasangan.split('@')[0]}*`, m)
         if (!global.db.users[m.sender].pasangan) return client.reply(m.chat, `*Kamu tidak sedang mengajak siapapun untuk berpacaran.*`, m)
         if (global.db.users[m.sender].taken && global.db.users[global.db.users[m.sender].pasangan].pasangan == m.sender) return client.reply(m.chat, `*Kamu sedang berpacaran dengan @${global.db.users[m.sender].pasangan.split('@')[0]}*`, m)
         client.reply(m.chat, `*Kamu sudah mengikhlaskan @${global.db.users[m.sender].pasangan.split('@')[0]} karena dia tidak memberikan jawaban diacc atau ditolak :v*`, m)
         global.db.users[m.sender].pasangan = ''
      } else if (/tembak|acc|tolak/.test(command)) {
         let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : (text).split`@` [1]) : text
         if (!text && !m.quoted) return client.reply(m.chat, Func.texted('bold', `Mention or Reply chat target.`), m)
         if (isNaN(number)) return client.reply(m.chat, Func.texted('bold', `Invalid number.`), m)
         if (number.length > 15) return client.reply(m.chat, Func.texted('bold', `Invalid format.`), m)
         try {
            if (text) {
               var user = number + '@s.whatsapp.net'
            } else if (m.quoted.sender) {
               var user = m.quoted.sender
            } else if (m.mentionedJid) {
               var user = number + '@s.whatsapp.net'
            }
         } catch (e) {} finally {
            let sender = global.db.users[m.sender]
            let target = global.db.users[user]
            if (typeof target.taken == 'undefined') target.taken = false
            if (typeof target.pasangan == 'undefined') target.pasangan = ''
            if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return client.reply(m.chat, Func.texted('bold', `The fuck?`), m)
            if (typeof target == 'undefined') return client.reply(m.chat, Func.texted('bold', `Can't find user data.`), m)
            if (user == m.sender) return client.reply(m.chat, Func.texted('bold', `Stress ??`), m)
            if (command == 'tembak') {
               if (!sender.taken && sender.pasangan && sender.pasangan != user) return client.reply(m.chat, `*Kamu sedang digantung oleh @${sender.pasangan.split('@')[0]} karena dia belum memberikan jawaban, silahkan kirim ${isPrefix}batal untuk membatalkan ajakan kepada @${sender.pasangan.split('@')[0]}*`, m)
               if (!sender.taken && sender.pasangan && sender.pasangan == user) return client.reply(m.chat, `*Sebelumnya kamu telah mengajak @${sender.pasangan.split('@')[0]} untuk berpacaran dan belum ada jawaban.*\n\n*Silahkan untuk @${user.split('@')[0]} kirim ${isPrefix}acc @tag atau ${isPrefix}tolak @tag*`, m)
               if (sender.taken && sender.pasangan) {
                  if (sender.pasangan == user) return client.reply(m.chat, `*Kamu dan @${user.split('@')[0]} sudah berstatus berpacaran eaa.*`, m)
                  let denda = Math.ceil(sender.point / 100 * 20)
                  sender.point -= denda
                  return client.reply(m.chat, `*lu udah pacaran sama si @${sender.pasangan.split('@')[0]}*\n\n*putus dulu kalo mau:v ( ${isPrefix}putus ) untuk menembak @${user.split('@')[0]}*\n\n*Denda* : - ${Func.formatNumber(denda)} (20%)`, m)
               } else if (target.taken && target.pasangan) {
                  let pacar = target.pasangan
                  if (target.taken && target.pasangan != m.sender) {
                     let denda = Math.ceil(sender.point / 100 * 20)
                     sender.point -= denda
                     return client.reply(m.chat, `@${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}, silahkan cari orang lain untuk diajak berpacaran.*\n\n*Denda* : - ${Func.formatNumber(denda)} (20%)`, m)
                  } else {
                     let denda = Math.ceil(sender.point / 100 * 20)
                     sender.point -= denda
                     return client.reply(m.chat, `*Kamu dan @${user.split('@')[0]} sudah berpacaran.\n\n*Denda* : - ${Func.formatNumber(denda)} (20%)*`, m)
                  }
               } else {
                  sender.pasangan = user
                  return client.reply(m.chat, `*Kamu baru saja mengajak @${user.split('@')[0]} untuk berpacaran.*\n\n*Silahkan untuk @${user.split('@')[0]} kirim ${isPrefix}acc @tag atau ${isPrefix}tolak @tag*`, m)
               }
            } else if (command == 'acc') {
               if (sender.taken) return client.reply(m.chat, `*Kamu sedang berpacaran dengan @${global.db.users[m.sender].pasangan.split('@')[0]}*`, m)
               if (!target.taken && global.db.users[user].pasangan != m.sender) return client.reply(m.chat, `*Maaf, @${user.split('@')[0]} tidak mengajakmu untuk berpacaran.*`, m)
               sender.taken = true
               target.taken = true
               sender.pasangan = user
               target.pasangan = m.sender
               return client.reply(m.chat, `*Selamat, kamu resmi jadian sama si @${user.split('@')[0]}*\n\n*Semoga langgeng dan bahagia selalu @${user.split('@')[0]} 💓 @${m.sender.split('@')[0]} 🥳🥳🥳 Aowkwkwk*`, m)
            } else if (command == 'tolak') {
               if (sender.taken) return client.reply(m.chat, `*Kamu sedang berpacaran dengan @${global.db.users[m.sender].pasangan.split('@')[0]}*`, m)
               if (!target.taken && target.pasangan != m.sender) return client.reply(m.chat, `*Maaf, @${user.split('@')[0]} tidak mengajakmu untuk berpacaran.*\nAwowkwk kasian ditolak`, m)
               target.pasangan = ''
               client.reply(m.chat, `*Tega lu udaa nolak si @${user.split('@')[0]} 🗿🗿*`, m)
            }
         }
      }
   },
   group: true,
   limit: true
}

let explain = (prefix) => {
   return `*P A C A R A N*

“Fitur ini dibuat sebagai perantara untuk menyatakan perasaan kalian kepada sesama anggota grup, jika kalian suka dengan seseorang didalam grup kalian bisa menggunakan fitur ini.”

◦ *${prefix}tembak* -- Perintah ini untuk mengajakan / menembak seseorang digrup, cara menggukannya kirim *${prefix}tembak @tag*.

◦ *${prefix}acc* -- Perintah ini untuk menerima ajakan seseorang dengan mengirimkan *${prefix}acc @tag*.

◦ *${prefix}tolak* -- Perintah ini untuk menolak ajakan seseorang dengan mengirimkan *${prefix}tolak @tag*.

◦ *${prefix}batal* -- Perintah ini untuk membatalkan ajakan apabila target tidak memberikan jawaban.

◦ *${prefix}putus* -- Perintah ini untuk memutuskan hubungan.

${global.footer}`
}