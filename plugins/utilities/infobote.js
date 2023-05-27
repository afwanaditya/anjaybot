exports.run = {
   usage: ['infolimit', 'panduan'],
   category: 'about',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
      if (command == 'infolimit') {       
      hu = `https://telegra.ph/file/e47b640069cd7e6b5dbb7.jpg`
	ho = `➠ *Point* adalah reward yang bisa di tukarkan dengan limit, terdapat 1 cara untuk mendapatkan point yaitu dari hasil bermain game.\n\n➠ *Limit* adalah jumlah jatah untuk menggunakan fitur yang terbatas, ada beberapa fitur yang menggunakan limit, contohnya fitur downloader dan converter, dan ada juga fitur yang tidak memakai limit. limit ini diberikan ke pengguna gratisan sebanyak *(200/bulan)* jika kamu pengguna biasa/gratisan, maka kamu hanya mendapatkan limit dengan jumlah tersebut, limit pengguna akan di reset setiap akhir bulan, jadi kalo limit kamu habis tinggal nunggu sampai akhir bulan atau kamu beli *paket premium* untuk mendapatkan unlimited akses (tanpa limit).\n\n➠ *Level* adalah rank dari seluruh pengguna bot, level ini tergantung jumlah point bisa naik dan bisa turun.`
         client.sendMessageModify(m.chat, ho, m, {
            thumbnail: hu,
            largeThumb: true
         })
        } else if (command == 'panduan') {
        system = global.db.setting
        boih = `https://telegra.ph/file/e47b640069cd7e6b5dbb7.jpg`
	men = `➠ *Prefix*, simbol diawal command setiap bot memiliki prefix yang berbeda beda, khusus bot ini memakai sistem multi prefix yang menggunakan 4 prefix umum yaitu : [ ${Func.texted('bold', system.multiprefix ? system.prefix.map(v => v).join(' ') : system.onlyprefix)} ]\n\n➠ *Command*, perintah untuk bot melakuan sesuatu, contoh pada skema diatas untuk mendownload video dari tiktok maka command yang digunakan adalah *tiktok*, perlu di ingat *1 command hanya untuk melakuan 1 tugas*, jadi command tiktok tidak bisa untuk mendownload video instagram.\n\n➠ *Argumen*, sesuatu yang diberikan setelah command, dari skema diatas command tiktok diberi argumen berupa URL postingan video tiktok, argumen ditentukan oleh command itu sendiri ataupun keterangan pada menu utama.`
client.sendMessageModify(m.chat, men, m, {
            thumbnail: boih,
            largeThumb: true
         })
         
         } 
      } catch {
      client.reply(m.chat, global.status.error, m)
    }
   },
   error: false,
   cache: true,
   location: __filename
}
