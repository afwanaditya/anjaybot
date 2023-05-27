exports.run = {
   usage: ['apakah', 'kapankah', 'siapakah'],
   use: 'text',
   category: 'random text',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
      if (command == 'apakah') {
      	if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'adit sangat tampan dan cul'), m)
      	let random = Func.random(['Iya', 'Mungkin iya', 'Ya Ndak Tau', 'Kepo Bat Luwh', 'Mungkin Tidak', 'Mungkin Iya', 'Jelas Iya Dong', 'Jelas Tidak Dong'])
      	let teks = `*Pertanyaan* : ${command} ${text}\n`
      	teks += `*Jawaban*: ${random}`
      	client.reply(m.chat, teks, m)
      } else if (command == 'kapankah') {
      	if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'Adit dapat cewek idaman'), m)
      	let time = Func.randomInt(1, 30)
      	let unit = Func.random(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])
      	let teks = `*Pertanyaan* : ${command} ${text}\n`
      	teks += `*Jawaban*: ${time} ${unit} lagi . . .`
      	client.reply(m.chat, teks, m)
      } else if (command == 'siapakah') {
      	if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'eek Adit Icikiwir disini'), m)
      	let member = participants.map(v => v.id)
      	let who = Func.random(member)
      	let teks = `*Pertanyaan* : ${command} ${text}?\n`
      	teks += `*Jawaban*: @${who.replace(/@.+/, '')}`
    	  client.reply(m.chat, teks, m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}