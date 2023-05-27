const { cerpen } = require('lib/Search_Cerpen')
exports.run = {
   usage: ['cerpen-bahasadaerah', 'cerpen-anak', 'cerpen-bahasainggris', 'cerpen-sejarah', 'cerpen-sedih', 'cerpen-sastra', 'cerpen-romantis', 'cerpen-rohani', 'cerpen-rindu', 'cerpen-remaja', 'cerpen-ramadhan', 'cerpen-petualangan', 'cerpen-persahabatan',
'cerpen-perpisahan', 'cerpen-perjuangan', 'cerpen-penyesalan', 'cerpen-pengorbanan', 'cerpen-pengalaman', 'cerpen-pendidikan', 'cerpen-penantian', 'cerpen-patahhati', 'cerpen-olahraga', 'cerpen-nasionalisme', 'cerpen-nasihat', 'cerpen-motivasi', 'cerpen-misteri',
'cerpen-mengharukan', 'cerpen-malaysia', 'cerpen-liburan', 'cerpen-kristen', 'cerpen-korea', 'cerpen-kisahnyata', 'cerpen-keluarga', 'cerpen-kehidupan', 'cerpen-jepang', 'cerpen-inspiratif', 'cerpen-gokil', 'cerpen-galau', 'cerpen-cintasejati', 'cerpen-cintasegitiga',
'cerpen-cintasedih', 'cerpen-cintaromantis', 'cerpen-cintapertama', 'cerpen-cintaislami', 'cerpen-cinta', 'cerpen-budaya', 'cerpen-bahasasunda', 'cerpen-bahasajawa', 'cerpen-anak'],
   category: 'e-perpus',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {           
     try {
     if (command == 'cerpen-bahasadaerah') {
     let cerpe = await cerpen(`bahasa daerah`)
    client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
    } else if (command == 'cerpen-anak') {
    let cerpe = await cerpen(`anak`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-bahasainggris') {
let cerpe = await cerpen(`bahasa Inggris`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-bahasajawa') {
let cerpe = await cerpen(`bahasa jawa`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-bahasasunda') {
let cerpe = await cerpen(`bahasa sunda`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-budaya') {
let cerpe = await cerpen(`budaya`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-cinta') {
let cerpe = await cerpen(`cinta`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-cintaislami') {
let cerpe = await cerpen(`cinta islami`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-cinta-pertama') {
let cerpe = await cerpen(`cinta pertama`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-cinta-romantis') {
let cerpe = await cerpen(`cinta romantis`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-cinta-sedih') {
let cerpe = await cerpen(`cinta sedih`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-cinta-segitiga') {
let cerpe = await cerpen(`cinta segitiga`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-cinta-sejati') {
let cerpe = await cerpen(`cinta sejati`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-gokil') {
let cerpe = await cerpen(`gokil`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-galau') {
let cerpe = await cerpen(`galau`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-inspiratif') {
let cerpe = await cerpen(`inspiratif`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-jepang') {
let cerpe = await cerpen(`jepang`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-kehidupan') {
let cerpe = await cerpen(`kehidupan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-keluarga') {
let cerpe = await cerpen(`keluarga`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-kisahnyata') {
let cerpe = await cerpen(`kisahnyata`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-korea') {
let cerpe = await cerpen(`korea`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-kristen') {
let cerpe = await cerpen(`kristen`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-liburan') {
let cerpe = await cerpen(`liburan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-malaysia') {
let cerpe = await cerpen(`malaysia`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-mengharukan') {
let cerpe = await cerpen(`mengharukan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-misteri') {
let cerpe = await cerpen(`misteri`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-motivasi') {
let cerpe = await cerpen(`motivasi`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-nasihat') {
let cerpe = await cerpen(`nasihat`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-nasionalisme') {
let cerpe = await cerpen(`nasionalisme`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-olahraga') {
let cerpe = await cerpen(`olahraga`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-patahhati') {
let cerpe = await cerpen(`patahhati`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-penantian') {
let cerpe = await cerpen(`penantian`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-pendidikan') {
let cerpe = await cerpen(`pendidikan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-pengalaman') {
let cerpe = await cerpen(`pengalaman`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-pengorbanan') {
let cerpe = await cerpen(`pengorbanan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-penyesalan') {
let cerpe = await cerpen(`pemyesalan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-perjuangan') {
let cerpe = await cerpen(`perjuangan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-perpisahan') {
let cerpe = await cerpen(`perpisahan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-persahabatan') {
let cerpe = await cerpen(`persahabatan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-petualangan') {
let cerpe = await cerpen(`petualangan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-ramadhan') {
let cerpe = await cerpen(`ramadhan`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-remaja') {
let cerpe = await cerpen(`remaja`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-rindu') {
let cerpe = await cerpen(`rindu`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-rohani') {
let cerpe = await cerpen(`rohani`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-romantis') {
let cerpe = await cerpen(`romantis`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-sastra') {
let cerpe = await cerpen(`sastra`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-sedih') {
let cerpe = await cerpen(`sedih`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
} else if (command == 'cerpen-sejarah') {
let cerpe = await cerpen(`sejarah`)
client.reply(m.chat, `◦ _*Title :*_ ${cerpe.title}\n◦ _*Author :*_ ${cerpe.author}\n◦ _*Category :*_ ${cerpe.kategori}\n◦ _*Pass Moderation :*_ ${cerpe.lolos}\n◦ _*Story :*_\n${cerpe.cerita}`, m)
}
    } catch (e) {
    client.reply(m.chat, String(e), m)
   }
   },
   error: false,
   limit: true
}