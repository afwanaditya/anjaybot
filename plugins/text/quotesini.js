exports.run = {
   usage: ['motivasi', 'galau', 'gombal', 'heker', 'bijak', 'bucin', 'truth', 'dare', 'quotes', 'pantun', 'islami'],
   category: 'random text',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
try {       
if (command == 'motivasi') {
let motivasii = pickRandom(global.motivasi)
client.reply(m.chat, motivasii, m)
} else if (command == 'galau') {
let galau = pickRandom(global.galau)
client.reply(m.chat, galau, m)
} else if (command == 'gombal') {
let bal = pickRandom(global.gombal)
client.reply(m.chat, bal, m)
} else if (command == 'heker') {
let ker = pickRandom(global.heker)
client.reply(m.chat, ker, m)
} else if (command == 'bijak') {
let me = pickRandom(global.bijak)
client.reply(m.chat, me, m)
} else if (command == 'bucin') {
let cil = require('@bochilteam/scraper')
let dom = await cil.bucin()
client.reply(m.chat, dom, m)
} else if (command == 'truth') {
let boc = require('@bochilteam/scraper')
let jum = await boc.truth()
client.reply(m.chat, jum, m)
} else if (command == 'dare') {
let boc = require('@bochilteam/scraper')
let jum = await boc.dare()
client.reply(m.chat, jum, m)
} else if (command == 'quotes') {
let duar = pickRandom(global.kates)
client.reply(m.chat, duar.quote, m)
} else if (command == 'pantun') {
let getun = pickRandom(global.panton)
client.reply(m.chat, getun, m)
} else if (command == 'islami') {
let iya = pickRandom(global.islam)
client.reply(m.chat, iya, m)
}
console.log('quotes Indonesia')
      } catch (e) {
         return client.reply(m.chat, String(e), m)
     }
   },
   error: false,
   limit: true
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.islam = [
'Segala sesuatu telah Allah takdirkan. - QS. Al Qamar : 49',
'Dan sesungguhnya DIA lah yang menjadikan orang tertawa dan menangis. - QS. An Najm: 43',
'Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita.- QS At-Taubah: 40',
'Maka sesungguhnya bersama kesulitan itu ada kemudahan.QS Al Insyirah: 5',
'Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum hingga mereka merubah keadaan yang ada pada diri mereka sendiri. - Q.S. Ar Rad: 11',
'Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya. - QS At- Tin: 4',
'Dan Kami jadikan kamu berpasang-pasangan. - QS. An-Naba: 8',
'Maka jangan sekali-kali membiarkan kehidupan dunia ini memperdayakan kamu. - QS. Fatir: 5',
'Dan bersabarlah kamu, sesungguhnya janji Allah adalah benar. - QS. Ar-Rum: 60',
'Dan barang siapa yang bertakwa kepada Allah, niscaya Allah menjadikan baginya kemudahan dalam urusannya. - Q.S At-Talaq: 4',
'Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. - QS. Al-Baqarah: 286',
'Tidakkah dia menyadari bahwa sesungguhnya Allah melihat segala perbuatannya?. - QS. Al-Alaq: 14',
'Bersabarlah wahai hati kelak akan ada seseorang yang datang dan siap menemani sisa hidupmu dalam ketaatan',
'Diri kita sendiri yang bisa menentukan apakah cinta kita berbuah dosa ataukah berbuah pahala',
'Dirimu yang sebenarnya adalah apa yang kamu lakukan di saat di ada orang yang melihatmu',
'Janji Allah tak pernah mengecewakan, dan bila kamu masih meras kecewa mungkin ada yang salah dengan imanmu',
'Rasa syukur tidak akan datang kepada orang yang tidak beriman dan tidak pernah kenyang',
'Maafkan aku andai apa yang aku tulis dan aku share tentang ilmu agama tidak sesuai dengan coberku dan kehidupanku yang asli',
'Kebanyakan manusia lebih senang menyalahkan orang lain daripada menyalahkan diri sendiri',
'Biarlah orang melihat penampilah kita biasa, tetapi luar biasa di mata Allah',
'Bersyukurlah bila dalam penantianmu, kau tetap gigih dalam kesendirian, sebab artinya kau telah memuliakan jalan Allah',
'Malu akan sebuah masalah itu boleh tapi jangan berlebihan sebab jika kita Yakin Pertolongan Allah itu sangatlah nyata',
'Yakinlah bahwa ada do’a yang terus dipanjatkan kepada Allah yang tidak putus-putus dari orang tua kita agar kita senantiasa menjadi anak yang sholeh dan sholehah',
'Setiap hari aku berusaha semaksimal mungkin mencari rizki yang halal demi bisa menghalalkanmu',
'Jatuh cinta bisa jadi sangat menyakitkan jika kita tidak mampu untuk mengendalikannya',
]

global.panton = [
'Ada anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur. ',
'Tanam kacang di pagi hari,\nTumbuh enam layu sebatang,\nKeburukan orang jangan dicari,\nBila kalian sedang puasa. ',
'Akhir bulan mendapat gaji,\nGaji untuk membeli ketupat,\nRajin-rajinlah sholat dan mengaji,\nJanganlah lupa puasa dan zakat. ',
'Waktu daftar hari terakhir,\nWaktu terasa banyak terbuang,\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang. ',
'Ada anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur. ',
'Seribu bebek di kandang singa,\nhanya satu berwarna belang,\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang. ',
'Hari minggu pergi ke pasar,\nBeli sayur dan juga beras,\nTiap hari harus belajar,\nPasti akan menjadi cerdas. ',
'Ayam goreng setengah mateng,\nBelinya di depan tugu.\nAbang sayang, abangku ganteng,\nlneng di sini setia menunggu. ',
'Api kecil dari tungku,\nApinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you. ',
'Seribu bebek di kandang singa,\nhanya satu berwarna belang\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang. ',
'Pergi memancing saat fajar,\nPulang siang membawa ikan\nSiapa yang rajin belajar\nJadi orang sukses kemudian. ',
'Beli computer itu biasa\nSupaya belajar jadi semangat\nMari kita belajar puasa\nAgar kita jadi kuat ',
'Minum sekoteng hangat rasanya,\nminum segelas ada yang minta.\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta.',
'Raja gagah lagi sakti Laksamana pergi berperang Supaya tidak sesal di hati Janganlah kena perdaya orang ',
'Pergi mendaki Gunung Daik Hendak menjerat kancil dan rusa Bergotong-royong amalan yang baik Elok diamalkan setiap masa',
'Pinang muda dibelah dua Manik-manik mati dirempuh Dari muda sampai ke tua Pengajaran baik jangan diubah ',
'Tegak-tegak cocokkan pancang Pasang bendera bunyikan tabuh Agak-agak mengatai orang Supaya cedera jangan tumbuh ',
'Batang ketumbar dahan-dahan Kelapa jatuh ke tepi bangsal Biarlah sabar dengan perlahan Siapa gopoh nanti menyesal ',
'Kayu bakar dibuat arang Arang dibakar memanaskan diri Jangan mudah menyalahkan orang Cermin muka lihat sendiri ',
'Lepas di jemur baju dilipat Disimpan dalam almari lama Jangan kita tinggalkan sholat Karena sholat tiang agama',
'Ke restoran membeli makan Perginya bersama sang istri Perintah Tuhan ayo kerjakan Larangan Tuhan ayo jauhi',
'Pulau Sumatra pulau Kalimantan Pulau Bali pulau Sumba Shalat lima waktu ayo tegakkan Tiang agama nan utama',
'Membeli beras ke Mang Duloh Membeli semen ke Mang Omat Iman dan takwa kepada Allah Kunci bahagia dunia akhirat',
'Beli bensin satu tangki Bensi dibeli oleh Mak Rosa Bersihkan hati dari dengki Sucikan raga dari dosa'
]

global.kates = [
  {
    "by": "A. France",
    "quote": "Lebih baik mengerti sedikit daripada salah mengerti."
  },
  {
    "by": "Abraham Lincoln",
    "quote": "Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan."
  },
  {
    "by": "Aeschylus",
    "quote": "Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya."
  },
  {
    "by": "Aesop",
    "quote": "Penderitaan adalah pelajaran."
  },
  {
    "by": "Albert Einstein",
    "quote": "Ilmu pengetahuan tanpa agama adalah pincang."
  },
  {
    "by": "Albert Einstein",
    "quote": "Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak."
  },
  {
    "by": "Albert Einstein",
    "quote": "Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala."
  },
  {
    "by": "Albert Einstein",
    "quote": "Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?."
  },
  {
    "by": "Albert Enstein",
    "quote": "Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri."
  },
  {
    "by": "Alex Osborn",
    "quote": "Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri."
  },
  {
    "by": "Alexander A. Bogomoletz",
    "quote": "Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama."
  },
  {
    "by": "Alexander Solzhenitsyn",
    "quote": "Manusia akan bahagia selama ia memilih untuk bahagia."
  },
  {
    "by": "Ali Javan",
    "quote": "Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang."
  },
  {
    "by": "Ali bin Abi Thalib",
    "quote": "Apabila sempurna akal seseorang, maka sedikit perkataannya."
  },
  {
    "by": "Ali bin Abi Thalib",
    "quote": "Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya."
  },
  {
    "by": "Ali bin Abi Thalib",
    "quote": "Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang."
  },
  {
    "by": "Anne M. Lindbergh",
    "quote": "Yang palin melelahkan dalam hidup adalah menjadi orang yang tidak tulus."
  },
  {
    "by": "Anonim",
    "quote": "Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup."
  },
  {
    "by": "Anonim",
    "quote": "Penundaan adalah kuburan dimana peluang dikuburkan."
  },
  {
    "by": "Antonie De Saint",
    "quote": "Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama."
  },
  {
    "by": "Aristoteles",
    "quote": "Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan."
  },
  {
    "by": "Arnold Glasow",
    "quote": "Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja."
  },
  {
    "by": "Art Buchwald",
    "quote": "Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan."
  },
  {
    "by": "Artemus Ward",
    "quote": "Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi."
  },
  {
    "by": "Ashleigh Brilliant",
    "quote": "Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan."
  },
  {
    "by": "Augustine",
    "quote": "Kesabaran adalah teman dari kebijaksanaan."
  },
  {
    "by": "Ayn Rand",
    "quote": "Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain."
  },
  {
    "by": "B. J. Habibie",
    "quote": "Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan."
  },
  {
    "by": "Balzac",
    "quote": "Kebencian seperti halnya cinta, berkobar karena hal-hal kecil."
  },
  {
    "by": "Barbara Sher",
    "quote": "Anda tidak perlu harus berhasil pada kali pertama."
  },
  {
    "by": "Beecher",
    "quote": "Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung."
  },
  {
    "by": "Benjamin Disraeli",
    "quote": "Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri."
  },
  {
    "by": "Bill Clinton",
    "quote": "Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan."
  },
  {
    "by": "Bill Cosby",
    "quote": "Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang."
  },
  {
    "by": "Bill Gates",
    "quote": "Konsumen yang paling tidak puas adalah sumber berharga untuk belajar."
  },
  {
    "by": "Bill Mccartney",
    "quote": "Kita ada disini bukan untuk saling bersaing. Kita ada disini untuk saling melengkapi."
  },
  {
    "by": "Brian Koslow",
    "quote": "Semakin kita bersedia bertanggung jawab atas perbuatan-perbuatan kita, semakin banyak kredibilitas yang kita miliki."
  },
  {
    "by": "Browning",
    "quote": "Selalu baik untuk memaafkan, tapi yang paling baik adalah melupakan sebuah kesalahan."
  },
  {
    "by": "Bruce Lee",
    "quote": "Jangan menjadi pohon kaku yang mudah patah. Jadilah bambu yang mampu bertahan melengkung melawan terpaan angin."
  },
  {
    "by": "Budha Gautama",
    "quote": "Jangan menangis karena kegagalan cinta, sebab manusia akan meninggalkan semua yang dicintainya."
  },
  {
    "by": "Bunda Teresa",
    "quote": "Jika Anda mengadili orang lain, Anda tak punya waktu untuk mencintai mereka."
  },
  {
    "by": "Bunda Teresa",
    "quote": "Jika tidak ada perdamaian, hal itu disebabkan kita telah lupa bahwa kita saling membutuhkan."
  },
  {
    "by": "Bung Hatta",
    "quote": "Kurang cerdas dapat diperbaiki dengan belajar, kurang cekatan dapat diperbaiki dengan pengalaman, kurang jujur sulit memperbaikinya."
  },
  {
    "by": "Burn",
    "quote": "Banyak orang sukses berkat banyaknya kesulitan dan kesukaran yang mesti dihadapi."
  },
  {
    "by": "Carol Burnet",
    "quote": "Hanya aku yang bisa merubah hidupku, tak ada seorang pun yang dapat melakukannya untukku."
  },
  {
    "by": "Charles Darwin",
    "quote": "Yang bisa bertahan hidup bukan spesies yang paling kuat. Bukan juga spesies yang paling cerdas. Tapi spesies yang paling responsif terhadap perubahan."
  },
  {
    "by": "Charles R. Swindoll",
    "quote": "Hidup adalah 10 persen yang terjadi kepada Anda, 90 persen bagaimana cara Anda menyikapinya."
  },
  {
    "by": "Ching Hai",
    "quote": "Memperbaiki diri kita adalah memperbaiki dunia."
  },
  {
    "by": "Ching Hai",
    "quote": "Jangan membeda-bedakan pekerjaan mana yang baik dan mana yang buruk. Masalah muncul jika kita membeda-bedakan dan memihak sesuatu."
  },
  {
    "by": "Ching Hai",
    "quote": "Kita bekerja harus tanpa pamrih. Itu berlaku untuk segala pekerjaan. Pengabdian tanpa syarat adalah yang terbaik."
  },
  {
    "by": "Ching Hai",
    "quote": "Kita harus menemukan kekuatan cinta dalam diri kita terlebih dahulu, barulah kita dapat benar-benar mencintai orang lain."
  },
  {
    "by": "Ching Hai",
    "quote": "Carilah uang secukupnya saja untuk membiayai kehidupan, agar dapat menyisihkan waktu dan tenaga untuk melatih spiritual."
  },
  {
    "by": "Christopher Colombus",
    "quote": "Harta benda tak membuat seseorang menjadi kaya raya, mereka hanya membuatnya lebih sibuk."
  },
  {
    "by": "Cicero",
    "quote": "Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan induk dari segala kebajikan yang lain."
  },
  {
    "by": "Cicero",
    "quote": "Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan juga induk dari segala kebajikan yang lain."
  },
  {
    "by": "Clarence Darrow",
    "quote": "Kebebasan itu berasal dari manusia, tidak dari undang-undang atau institusi."
  },
  {
    "by": "Confucius",
    "quote": "Hidup ini benar-benar sederhana, tapi kita malah bersikeras membuatnya menjadi rumit."
  },
  {
    "by": "Confucius",
    "quote": "Kemana pun Anda pergi, pergilah dengan sepenuh hati."
  },
  {
    "by": "Confucius",
    "quote": "Orang yang melakukan kesalahan dan tidak memperbaiki kesalahannya, melalakukan kesalahan yang lainnya."
  },
  {
    "by": "Confucius",
    "quote": "Kebanggaan kita yang terbesar bukan karena tidak pernah gagal, tetapi bangkit kembali setiap kita jatuh."
  },
  {
    "by": "Cowper",
    "quote": "Bunga yang tidak akan pernah layu dibumi adalah kebajikan."
  },
  {
    "by": "Cynthia Ozick",
    "quote": "Untuk membayangkan hal yang tak dapat dibayangkan, dibutuhkan imajinasi yang luar biasa."
  },
  {
    "by": "D. J. Schwartz",
    "quote": "Kesulitan apapun tidak tahan terhadap keuletan dan ketekunan. Tanpa keuletan, orang yang paling pintar dan paling berbakat sering gagal dalam hidupnya."
  },
  {
    "by": "Dale Carnegie",
    "quote": "Satu-satunya cara agar kita memperoleh kasih sayang, adalah jangan menuntut agar kita dicintai, tetapi mulailah memberi kasih sayang kepada orang lain tanpa mengharapkan balasan."
  },
  {
    "by": "Dale Carnegie",
    "quote": "Bila orang yang kuatir akan kekurangannya mau mensyukuri kekayaan yang mereka miliki, mereka akan berhenti kuatir."
  },
  {
    "by": "Dale Carnegie",
    "quote": "Usahakan membentuk suatu hubungan \"kawat\" antara otak dan hati Anda."
  },
  {
    "by": "Dale Carnegie",
    "quote": "Senyuman akan membuat kaya jiwa seseorang yang menerimanya, tanpa membuat miskin seseorang yang memberikannya."
  },
  {
    "by": "Dale Carnegie",
    "quote": "Orang jarang sukses kecuali jika mereka senang dengan apa yang dikerjakannya."
  },
  {
    "by": "David Livingston",
    "quote": "Saya akan pergi kemanapun selama itu arahnya ke depan."
  },
  {
    "by": "David V. Ambrose",
    "quote": "Jika Anda punya kemauan untuk menang, Anda sudah mencapai separuh sukses. Jika Anda tidak punya kemauan untuk menang, Anda sudah mencapai separuh kegagalan."
  },
  {
    "by": "David Weinbaum",
    "quote": "Rahasia menuju hidup kaya adalah mempunyai lebih banyak awal ketimbang akhir."
  },
  {
    "by": "Desbarolles",
    "quote": "Kebenaran yang tidak dimengerti akan menjadi kesalahan."
  },
  {
    "by": "Descrates",
    "quote": "Saya berpikir, karena itu saya ada."
  },
  {
    "by": "Djamaludin Abassy",
    "quote": "Mental yang lemah lebih parah dari fisik yang lemah."
  },
  {
    "by": "Donald Kendall",
    "quote": "Satu-satunya sukses yang diraih sebelum bekerja hanyalah ada di kamus saja."
  },
  {
    "by": "Dr. Frank Crane",
    "quote": "Sahabat terbaik dan musuh terburuk kita adalah pikiran-pikiran kita. Pikiran dapat lebih baik dari seorang dokter atau seorang bankir atau seorang teman kepercayaan. Juga dapat lebih berbahaya dadi penjahat."
  },
  {
    "by": "Dr. Ronald Niednagel",
    "quote": "Pergilah sejauh Anda bisa memandang, dan ketika Anda tiba disana, Anda akan memandang lebih jauh."
  },
  {
    "by": "Dr.\u00a0Johnnetta Cole",
    "quote": "Jika kamu ingin pergi cepat, pergilah sendiri. Jika kamu ingin pergi jauh, pergilah bersama-sama."
  },
  {
    "by": "Dwigt D. Esenhower",
    "quote": "Seorang intelektual tidak akan pernah mengatakan lebih daripada apa yang diketahuinya."
  },
  {
    "by": "Earl Campbell",
    "quote": "Persoalan-persoalan adalah harga yang Anda bayar untuk kemajuan."
  },
  {
    "by": "Earl Campbell",
    "quote": "Persoalan-persoalan adalah harga yang harus Anda bayar untuk kemajuan."
  },
  {
    "by": "Edgar Alnsel",
    "quote": "Hidup manusia penuh dengan bahaya, tetapi disitulah letak daya tariknya."
  },
  {
    "by": "Edmund Burke",
    "quote": "Anda tidak dapat merencanakan masa yang akan datang berdasarkan masa lalu."
  },
  {
    "by": "Edward L. Curtis",
    "quote": "Optimisme yang tidak disertai dengan usaha hanya merupakan pemikiran semata yang tidak menghasilkan buah."
  },
  {
    "by": "Edward de Bono",
    "quote": "Jika Anda termasuk orang yang senang menunggu datangnya peluang, Anda adalah bagian dari manusia pada umumnya."
  },
  {
    "by": "Edy Murphy",
    "quote": "Aku menghabiskan usia 30-an untuk memperbaiki segala kesalahanku di usia 20-an."
  },
  {
    "by": "Einstein",
    "quote": "Berusaha untuk tidak menjadi manusia yang berhasil tapi berusahalah menjadi manusia yang berguna."
  },
  {
    "by": "Eisenhower",
    "quote": "Mulai sekarang kita tidak usah membuang-buang waktu barang semenit pun untuk memikirkan orang-orang yang tidak kita sukai."
  },
  {
    "by": "Elanor Roosevelt",
    "quote": "Ketika kita berhenti membuat kontribusi, kita mulai mati."
  },
  {
    "by": "Elbert Hubbad",
    "quote": "Kesalahan terbesar yang dibuat manusia dalam kehidupannya adalah terus-menerus merasa takut bahwa mereka akan melakukan kesalahan."
  },
  {
    "by": "Elizabeth Browning",
    "quote": "Janganlah menyebut orang tidak bahagia sebelum dia mati. Jangan menilai pekerjaan seseorang sebelum pekerjaannya berakhir."
  },
  {
    "by": "Emerson",
    "quote": "Percaya pada diri sendiri adalah rahasia utama mencapai sukses."
  },
  {
    "by": "Engelbert Huperdinck",
    "quote": "Anda harus waspada dengan kesenangan. Pastikan bahwa Anda menikmatinya dan bukan dikendalikannya."
  },
  {
    "by": "Erich Watson",
    "quote": "Kehilangan kekayaan masih dapat dicari kembali, kehilangan kepercayaan sulit didapatkan kembali."
  },
  {
    "by": "Francois De La Roche",
    "quote": "Bila tidak mampu menemukan kedamaian dalam diri sendiri, tak ada gunanya mencari di tempat lain."
  },
  {
    "by": "Francois De La Roche",
    "quote": "Kita terbiasa menyembunyikan diri dari orang lain, sampai akhirnya kita sendiri tersembunyi dari diri kita."
  },
  {
    "by": "Francois Roche",
    "quote": "Kita lebih sibuk menyakinkan orang lain bahwa kita bahagia ketimbang benar-benar merasakan bahagia itu sendiri."
  },
  {
    "by": "Frank Crane",
    "quote": "Anda mungkin ditipu jika terlalu mempercayai, tetapi hidup Anda akan tersiksa jika tidak cukup mempercayai."
  },
  {
    "by": "Frank Giblin",
    "quote": "Jadilah diri Anda sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri Anda sendiri?."
  },
  {
    "by": "Franklin",
    "quote": "Bila Anda ingin dicintai, cintailah dan bersikaplah sebagai orang yang patut dicintai."
  },
  {
    "by": "Fuller",
    "quote": "Contoh yang baik adalah nasihat terbaik."
  },
  {
    "by": "Galileo Galilei",
    "quote": "Rumput yang paling kuat tumbuhnya terdapat di atas tanah yang paling keras."
  },
  {
    "by": "Galileo Galilei",
    "quote": "Kamu tidak dapat mengajari seseorang apa pun, kamu hanya bisa membantunyanya menemukan apa yang ada dalam dirinya sendiri."
  },
  {
    "by": "Gandhi",
    "quote": "Mereka yang berjiwa lemah tak akan mampu memberi seuntai maaf tulus. Pemaaf sejati hanya melekat bagi mereka yang berjiwa tangguh."
  },
  {
    "by": "Gandhi",
    "quote": "Kebahagiaan tergantung pada apa yang dapat Anda berikan, bukan pada apa yang Anda peroleh."
  },
  {
    "by": "Gen Collin Powel",
    "quote": "Tak ada rahasia untuk menggapai sukses. Sukses itu dapat terjadi karena persiapan, kerja keras dan mau belajar dari kegagalan."
  },
  {
    "by": "George B. Shaw",
    "quote": "Hidup bukanlah tentang menemukan dirimu sendiri. Hidup adalah tentang menciptakan dirimu sendiri."
  },
  {
    "by": "George III",
    "quote": "Saya lebih baik kehilangan mahkota daripada melakukan tindakan yang menurut saya memalukan."
  },
  {
    "by": "George Santayana",
    "quote": "Tidak ada obat untuk kelahiran dan kematian, kecuali menikmati yang ada di antara keduanya."
  },
  {
    "by": "George W.",
    "quote": "Harapan tak pernah meninggalkan kita, kita yang meninggalkan harapan."
  },
  {
    "by": "Gilbert Chesterton",
    "quote": "Agar bisa menjadi cukup cerdas untuk meraih semua uang yang diinginkan, kita harus cukup bodoh untuk menginginkannya."
  },
  {
    "by": "Gothe",
    "quote": "Semua pengetahuan yang kumiliki bisa orang lain peroleh, tapi hatiku hanyalah untuk diriku sendiri."
  },
  {
    "by": "H. N. Spieghel",
    "quote": "Betapapun tingginya burung terbang, toh dia harus mencari dan mendapatkan makanannya di bumi juga."
  },
  {
    "by": "H.L Hunt",
    "quote": "Tetapkan apa yang Anda inginkan. Putuskan Anda ingin menukarnya dengan apa. Tentukan prioritas dan laksanakan."
  },
  {
    "by": "Hal Borland",
    "quote": "Melihat pohon, saya jadi mengerti tentang kesabaran. Memandang rumput, saya jadi menghargai ketekunan."
  },
  {
    "by": "Hamka",
    "quote": "Kecantikan yang abadi terletak pada keelokan adab dan ketinggian ilmu seseorang, bukan terletak pada wajah dan pakaiannya."
  },
  {
    "by": "Hamka",
    "quote": "Kita harus yakin bahwa apa yang ditentukan oleh Tuhan untuk kita, itulah yang terbaik."
  },
  {
    "by": "Hamka",
    "quote": "Berani menegakkan keadilan, walaupun mengenai diri sendiri, adalah puncak segala keberanian."
  },
  {
    "by": "Hamka",
    "quote": "Hawa nafsu membawa kesesatan dan tidak berpedoman. Sementara akal menjadi pedoman menuju keutamaan. Hawa nafsu menyuruhmu berangan-angan, tetapi akal menyuruhmu menimbang."
  },
  {
    "by": "Harriet Braiker",
    "quote": "Berusaha berhasil untuk memotivasi dirimu, tapi berusaha untuk selalu sempurna akan membuat tertekan."
  },
  {
    "by": "Helen Keller",
    "quote": "Kita tidak akan belajar berani dan sabar jika di dunia ini hanya ada kegembiraan."
  },
  {
    "by": "Henri Ford",
    "quote": "Kegagalan hanyalah kesempatan untuk memulai lagi dengan lebih pandai."
  },
  {
    "by": "Henry David Thoreau",
    "quote": "Kebaikan adalah satu-satunya investasi yang tidak akan merugikan."
  },
  {
    "by": "Henry Ford",
    "quote": "Idealis adalah orang yang membantu orang lain untuk makmur."
  },
  {
    "by": "Henry Ford",
    "quote": "Berpikir itu adalah pekerjaan yang berat di antara segala jenis pekerjaan. Itulah sebabnya sedikit sekali orang yang senang melakukannya."
  },
  {
    "by": "Henry Ford",
    "quote": "Persaingan yang tujuannya hanya untuk bersaing, untuk mengalahkan orang lain, tak pernah mendatangkan banyak manfaat."
  },
  {
    "by": "Henry Longfellow",
    "quote": "Kehidupan orang-orang besar mengingatkan kita bahwa kita bisa membuat kehidupan kita luhur."
  },
  {
    "by": "Henry Thoreau",
    "quote": "Hidupku menjadi hiburanku dan tak hentinya memberikan kejutan. Hidupku bagaikan drama dengan begitu banyak babak tanpa adegan penutup."
  },
  {
    "by": "Hubert Humprey",
    "quote": "Apa yang Anda lihat adalah apa yang Anda capai."
  },
  {
    "by": "Imam Al-Ghazali",
    "quote": "Kebahagiaan terletak pada kemenangan memerangi hawa nafsu dan menahan keinginan yang berlebih-lebihan."
  },
  {
    "by": "Imam Ghazali",
    "quote": "Caci maki dari seorang penjahat merupakan kehormatan bagi seorang yang jujur."
  },
  {
    "by": "J.C.F von Schiller",
    "quote": "Orang yang terlalu banyak merenung akan meraih sedikit."
  },
  {
    "by": "Jack Hyles",
    "quote": "Jangan gunakan orang-orang untuk membangun pekerjaan besar, gunakan pekerjaan Anda untuk membangun orang-orang besar."
  },
  {
    "by": "Jackson Brown",
    "quote": "Kesalahaan terbesar yang mungkin Anda buat adalah mempercayai bahwa Anda bekerja untuk orang lain."
  },
  {
    "by": "Jacques Audiberti",
    "quote": "Kepengecutan yang paling besar adalah ketika kita membuktikan kekuatan kita kepada kelemanan orang lain."
  },
  {
    "by": "James Thurber",
    "quote": "Jangan lihat masa lalu dengan penyesalan, jangan pula lihat masa depan dengan ketakutan, tapi lihatlah sekitar Anda dengan penuh kesadaran."
  },
  {
    "by": "Janet Erskine",
    "quote": "Jangan menunggu keadaan yang ideal. Jangan juga menunggu peluang-peluang terbaik. Keduanya tak akan pernah datang."
  },
  {
    "by": "Jeff Goins",
    "quote": "Kebanyakan orang sukses yang saya kenal bukan orang yang sibuk, mereka orang yang focus."
  },
  {
    "by": "Jerry West",
    "quote": "Anda tidak dapat melakukan banyak hal di hidup Anda, jika Anda hanya bekerja di hari-hari yang Anda rasakan baik."
  },
  {
    "by": "Jim Rohn",
    "quote": "Tembok yang kita bangun untuk menghambat kesedihan, juga membuat kita tertutup dari kebahagiaan."
  },
  {
    "by": "Jim Rohn",
    "quote": "Jika Anda tidak merancang hidup Anda sendiri, kemungkinan Anda akan menjalani rencana orang lain. Apa yang mereka rencanakan untuk Anda? Tidak banyak."
  },
  {
    "by": "Jim Ryan",
    "quote": "Motivasi adalah sesuatu yang membuat Anda memulai. Kebiasaan adalah sesuatu yang membuat Anda melanjutkan."
  },
  {
    "by": "Jimi Hendrix",
    "quote": "Ketika kekuatan akan cinta melebihi kecintaan akan kekuasaan, maka dunia pun menemukan kedamaian."
  },
  {
    "by": "Jimmy Dean",
    "quote": "Aku tak bisa merubah arah angin, tapi aku bisa menyesuaikan layarku untuk tetap bisa mencapai tujuanku."
  },
  {
    "by": "Joan Baez",
    "quote": "Kita tak bisa memilih bagaimana kita meninggal atau kapan. Kita hanya bisa memutuskan bagaimana kita hidup. Sekarang."
  },
  {
    "by": "John B. Gough",
    "quote": "Jika Anda ingin sukses, Anda harus menciptakan peluang untuk diri sendiri."
  },
  {
    "by": "John C. Maxwell",
    "quote": "Bekerja keras sekarang, merasakan hasilnya nanti; bermalas-malasan sekarang, merasakan akibatnya nanti."
  },
  {
    "by": "John C. Maxwell",
    "quote": "Untuk menangani diri Anda sendiri, gunakan kepala Anda. Untuk menangani orang lain, gunakan hati Anda."
  },
  {
    "by": "John C. Maxwell",
    "quote": "Bekerja keras sekarang, merasakannya nanti. Bermalas-malas sekarang, merasakan akibatnya nanti."
  },
  {
    "by": "John Craig",
    "quote": "Tidak peduli seberapa banyak yang dapat Anda lakukan, tidak peduli seberapa menarik hati kepribadian Anda, Anda tidak dapat melangkah jauh jika Anda tidak dapat bekerja bersama orang lain."
  },
  {
    "by": "John D. Rockefeller",
    "quote": "Orang termiskin adalah orang yang tidak mempunyai apa-apa kecuali uang."
  },
  {
    "by": "John Gardne",
    "quote": "Jika kita melayani, maka hidup akan lebih berarti."
  },
  {
    "by": "John Gray",
    "quote": "Sebenarnya semua kesulitan merupakan kesempatan bagi jiwa yang tumbuh."
  },
  {
    "by": "John Manson",
    "quote": "Anda dilahirkan orisinal, jadi tidak perlu setengah mati meniru orang lain."
  },
  {
    "by": "John Maxwell",
    "quote": "Seberapa jauh Anda gagal, tidak masalah, tetapi yang penting seberapa sering Anda bangkit kembali."
  },
  {
    "by": "John Q. Adams",
    "quote": "Jika tindakan-tindakan Anda mengilhami orang lain untuk bermimpi lebih, belajar lebih, bekerja lebih, dan menjadi lebih baik, Anda adalah seorang pemimpin."
  },
  {
    "by": "John Ruskin",
    "quote": "Saya yakin, ujian pertama bagi orang besar ialah kerendahan hati."
  },
  {
    "by": "John Ruskin",
    "quote": "Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tapi bagaimana ia berkembang karenanya."
  },
  {
    "by": "John Ruskin",
    "quote": "Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tetapi bagaimana ia berkembang karenanya."
  },
  {
    "by": "John Wolfgang",
    "quote": "Perbuatan-perbuatan salah adalah biasa bagi manusia, tetapi perbuatan pura-pura itulah sebenarnya yang menimbulkan permusuhan dan pengkhianatan."
  },
  {
    "by": "Joseph Addison",
    "quote": "Rahmat sering datang kepada kita dalam bentuk kesakitan, kehilangan dan kekecewaan; tetapi kalau kita sabar, kita segera akan melihat bentuk aslinya."
  },
  {
    "by": "Julia Roberts",
    "quote": "Cinta sejati tidak datang kepadamu, tetapi harus datang dari dalam dirimu."
  },
  {
    "by": "Junius",
    "quote": "Integritas seseorang diukur dengan tingkah lakunya bukan profesinya."
  },
  {
    "by": "Kahlil Gibran",
    "quote": "Kita berdoa kalau kesusahan dan membutuhkan sesuatu, mestinya kita juga berdoa dalam kegembiraan besar dan saat rezeki melimpah."
  },
  {
    "by": "Kahlil Gibran",
    "quote": "Untuk memahami hati dan pikiran seseorang, jangan lihat apa yang sudah dia capai, tapi lihat apa yang dia cita-citakan."
  },
  {
    "by": "Keri Russel",
    "quote": "Kadang kala, justru keputusan kecil yang akan mampu merubah hidup kita selamanya."
  },
  {
    "by": "Knute Rockne",
    "quote": "Apabila perjalanan menjadi sulit, orang ulet akan berjalan terus."
  },
  {
    "by": "Kong Hu Cu",
    "quote": "Orang yang berbudi tinggi selalu berpedoman pada keadilan dan selalu berusaha menjalankan kewajiban."
  },
  {
    "by": "Konrad Adenauer",
    "quote": "Kita semua hidup di bawah langit yang sama, tetapi tidak semua orang punya cakrawala yang sama."
  },
  {
    "by": "Kung Fu-Tze",
    "quote": "Ia yang bijak akan merasa malu, jika kata-katanya lebih baik daripada tindakannya."
  },
  {
    "by": "Lao Tzu",
    "quote": "Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikku."
  },
  {
    "by": "Lao Tzu",
    "quote": "Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikmu."
  },
  {
    "by": "Les Brown",
    "quote": "Terima tanggung jawab untuk diri Anda sendiri. Sadari bahwa hanya Anda sendiri, bukan orang lain, yang bisa membuat Anda pergi ke tempat yang Anda inginkan."
  },
  {
    "by": "Louis Gittner",
    "quote": "Meski yang kita hadapi adalah jalan buntu, namun cinta akan membangun jalan layang di atasnya."
  },
  {
    "by": "Louis Pasteur",
    "quote": "Tahukah Anda rahasia sukses saya dalam mencapai tujuan? Cuma keuletan, tak lebih dan tak kurang."
  },
  {
    "by": "Mahatma Gandhi",
    "quote": "Kepuasan terletak pada usaha, bukan pada hasil. Berusaha dengan keras adalah kemenangan yang hakiki."
  },
  {
    "by": "Marcel Ayme",
    "quote": "Kerendahan hati merupakan ruang tunggu bagi kesempurnaan."
  },
  {
    "by": "Maria Sharapova",
    "quote": "Saya belajar banyak dari kekalahan. Dan kekalahan-kekalahan itu, membuat saya semakin tabah."
  },
  {
    "by": "Mark Cuban",
    "quote": "Buatlah usaha Anda berhasil dengan satu-satunya cara: kerja keras!."
  },
  {
    "by": "Mark Twain",
    "quote": "Kebaikan adalah bahasa yang dapat didengar si tuli dan bisa dilihat si buta."
  },
  {
    "by": "Marsha Sinetar",
    "quote": "Lakukan apa yang Anda senangi, uang akan mengikuti."
  },
  {
    "by": "Martin Luther King",
    "quote": "Tak ada waktu yang tidak tepat untuk melakukan sesuatu yang benar."
  },
  {
    "by": "Mary McCarthy",
    "quote": "Kendatipun Anda berada di jalur yang tepat, Anda akan tetap terkejar jika hanya duduk-duduk saja disana."
  },
  {
    "by": "Maxim Gorky",
    "quote": "Kebahagiaan selalu tampak kecil saat berada dalam genggaman. Tapi coba lepaskan dan Anda akan langsung tahu, betapa besar dan berhargannya kebahagiaan."
  },
  {
    "by": "Mery Hemingway",
    "quote": "Latih diri Anda untuk tidak khawatir. Kekhawatiran tak pernah memperbaiki apa-apa."
  },
  {
    "by": "Michael Drury",
    "quote": "Kematangan bukanlah suatu keadaan yang dicapai dengan usia. Dia merupakan perkembangan dari cinta, belajar, membaca dan berpikir hingga menghasilkan kemampuan."
  },
  {
    "by": "Michael Pritchard",
    "quote": "Anda berhenti tertawa bukan karena bertambah tua. Sebaliknya Anda bertambah tua justru karena berhenti tertawa."
  },
  {
    "by": "Miguel de Cervantes",
    "quote": "Pepatah adalah kalimat singkat berdasarkan pengalaman panjang."
  },
  {
    "by": "Miguel de Unamuno",
    "quote": "Tidak dicintai orang lain memang menyedihkan, tapi lebih menyedihkan lagi kalau tidak bisa mencintai orang lain."
  },
  {
    "by": "N. H. Casson",
    "quote": "Kemiskinan jiwa lebih mengerikan daripada kemiskinan jasmani atau materi."
  },
  {
    "by": "Natalie Portman",
    "quote": "Anda belum bisa dibilang kaya sampai Anda memiliki sesuatu yang tidak dapat dibeli uang."
  },
  {
    "by": "Nelson Mandela",
    "quote": "Pendidikan adalah senjata paling ampuh dimana kau dapat menggunakannya untuk merubah dunia."
  },
  {
    "by": "Norman Peale",
    "quote": "Campakanlah jauh-jauh pikiran murung dan kesal itu, lalu bangkitkanlah."
  },
  {
    "by": "Nunse",
    "quote": "Bukanlah yang kuat, tetapi yang uletlah yang menjadikan mereka manusia yang besar."
  },
  {
    "by": "O. S. Marden",
    "quote": "Kemajuan adalah hasil dari memusatkan seluruh kekuatan jiwa dan pikiran pada cita-cita yang dituju."
  },
  {
    "by": "Oliver W. Holmes",
    "quote": "Semakin lama kita hidup, semakin kita menemukan bahwa kita mirip dengan orang lain."
  },
  {
    "by": "Oprah Winfrey",
    "quote": "Melakukan yang terbaik pada saat ini akan menempatkan Anda ke tempat terbaik pada saat berikutnya."
  },
  {
    "by": "Oscar Wilde",
    "quote": "Jika seseorang menyatakan kebenaran, dia yakin; cepat atau lambat; akan mendapatkannya."
  },
  {
    "by": "Pablo Picasso",
    "quote": "Bila semangat Anda menurun, lakukanlah sesuatu. Kalau Anda telah melakukan sesuatu keadaan tidak berubah, lakukanlah sesuatu yang berbeda."
  },
  {
    "by": "Paul Galvin",
    "quote": "Jangan takut dengan kesalahan. Kebijaksanaan biasanya lahir dari kesalahan."
  },
  {
    "by": "Paul Harvey",
    "quote": "Saya tidak pernah melihat suatu monumen didirikan bagi orang pesimis."
  },
  {
    "by": "Pepatah Cina",
    "quote": "Beranilah menyadari kesalahan dan mulai lagi."
  },
  {
    "by": "Pepatah Cina",
    "quote": "Benar jadi berani."
  },
  {
    "by": "Pepatah Cina",
    "quote": "Orang yang bertanya, bodoh dalam 5 menit. Dan orang yang tidak bertanya akan tetap bodoh untuk selamanya."
  },
  {
    "by": "Pepatah Cina",
    "quote": "Bila saya mendengar, saya akan lupa. Setelah melihat saya bisa mengerti. Dan setelah mengerjakan, barulah saya bisa memahami."
  },
  {
    "by": "Pepatah Cina",
    "quote": "Orang yang tersenyum selalu lebih kuat dari orang yang marah."
  },
  {
    "by": "Pepatah Cina",
    "quote": "Orang yang memindahkan gunung memulai dengan memindahkan batu-batu kecil."
  },
  {
    "by": "Pepatah Inggris",
    "quote": "Orang yang mencari masalah akan selalu mendapatkannya."
  },
  {
    "by": "Pepatah Inggriss",
    "quote": "Keterampilan dan keyakinan merupakan pasukan bersenjata yang tidak dapat dikalahkan."
  },
  {
    "by": "Pepatah Jepang",
    "quote": "Sebatang anak panah mudah dipatahkan, tetapi tidak demikian dengan sepuluh anak panah yang disatukan."
  },
  {
    "by": "Pepatah Jepang",
    "quote": "Visi tanpa aksi adalah mimpi di siang bolong. Aksi tanpa visi adalah mimpi buruk."
  },
  {
    "by": "Pepatah Jerman",
    "quote": "Orang yang tak pernah mencicipi pahit tak akan tahu apa itu manis."
  },
  {
    "by": "Pepatah Latin",
    "quote": "Dengan belajar Anda bisa mengajar. Dengan mengajar, Anda belajar."
  },
  {
    "by": "Pepatah Persia",
    "quote": "Saya menangis karena tak punya sepatu, sampai saya melihat orang tak punya kaki."
  },
  {
    "by": "Pepatah Roma",
    "quote": "Kesengsaraan menghasilkan ketekunan. Ketekunan menghasilkan watak, dan watak menghasilkan harapan."
  },
  {
    "by": "Pepatah Skotlandia",
    "quote": "Bila kemauan siap, kaki menjadi ringan."
  },
  {
    "by": "Pepatah Spanyol",
    "quote": "Mengenal diri sendiri adalah awal dari perbaikan diri."
  },
  {
    "by": "Pepatah Tibet",
    "quote": "Jangan meremehkan raja yang picik, seperti halnya jangan meremehkan sungai yang kecil."
  },
  {
    "by": "Pepatah Tibet",
    "quote": "Apabila seseorang mengajarkan sesuatu, dia sendiri harus melaksanakan ajaran itu."
  },
  {
    "by": "Peter Sinclair",
    "quote": "Kehidupan yang hebat adalah kulminasi dari pemikiran-pemikiran hebat disertai dengan tindakan-tindakan hebat."
  },
  {
    "by": "Phyllis Bottome",
    "quote": "Ada dua cara mengatasi kesulitan, Anda mengubah kesulitan-kesulitan atau Anda mengubah diri sendiri untuk mengatasinya."
  },
  {
    "by": "Plato",
    "quote": "Orang bijak berbicara karena mereka mempunyai sesuatu untuk dikatakan, orang bodoh berbicara karena mereka ingin mengatakan sesuatu."
  },
  {
    "by": "Plato",
    "quote": "Orang bijak berbicara karena ia memiliki sesuatu untuk dikatakan. Orang bodoh berbicara karena ia atau dia harus mengatakan sesuatu."
  },
  {
    "by": "Plato",
    "quote": "Berbuat tidak adil lebih memalukan daripada menderita ketidakadilan."
  },
  {
    "by": "Plato",
    "quote": "Siapa yang tidak bisa memimpin dirinya sendiri, tidak akan bisa memimpin orang."
  },
  {
    "by": "Plautus",
    "quote": "Kesabaran adalah obat terbaik untuk semua masalah."
  },
  {
    "by": "Plautus",
    "quote": "Jauh lebih mudah memulai secara baik daripada mengakhiri secara baik."
  },
  {
    "by": "Pliny The Elder",
    "quote": "Harapan adalah tiang yang menyangga dunia."
  },
  {
    "by": "R. A. Kartini",
    "quote": "Kemenangan gemilang tidak diperoleh dari medan pertempuran saja, tetapi sering diperoleh dari hati."
  },
  {
    "by": "R. Browning",
    "quote": "kita jatuh untuk bangun, berhenti untuk berjalan, dan tidur untuk bangun."
  },
  {
    "by": "R. W. Shephred",
    "quote": "Kamu harus menghadapi depresi, sama seperti kamu menghadapi seekor harimau."
  },
  {
    "by": "R.H. Grant",
    "quote": "Jika Anda mempekerjakan orang-orang yang lebih pintar dari Anda, Anda membuktikan Anda lebih pintar dari mereka."
  },
  {
    "by": "Rabbi Schachtel",
    "quote": "Kebahagiaan bukanlah memiliki apa yang kita inginkan, melainkan menginginkan apa yang kita miliki."
  },
  {
    "by": "Ralph W. Emerson",
    "quote": "Satu ons aksi jauh lebih berharga daripada satu ton teori."
  },
  {
    "by": "Ralph W. Emerson",
    "quote": "Seseorang itu sukses besar jika dia sadar, kegagalan-kegagalannya adalah persiapan untuk kemenangan-kemenangannya."
  },
  {
    "by": "Ralph Waldo Emerson",
    "quote": "Kedamaian tidak terdapat di dunia luar, melainkan terdapat dalam jiwa manusia itu sendiri."
  },
  {
    "by": "Ralph Waldo Emerson",
    "quote": "Percayalah kepada orang lain, dan mereka akan tulus kepada Anda. Perlakukan mereka seperti orang besar dan mereka akan memperlihatkan dirinya sebagai orang besar."
  },
  {
    "by": "Rene Descartes",
    "quote": "Tidak cukup hanya punya otak yang baik. Yang penting adalah menggunakannya secara baik."
  },
  {
    "by": "Richard Bach",
    "quote": "Tanyakan pada diri sendiri rahasia sukses. Dengarkan jawaban Anda, dan lakukan."
  },
  {
    "by": "Richard C. Miller",
    "quote": "Jika rumput tetangga lebih hijau, bersyukurlah Anda masih bisa berpijak di tanah untuk melihatnya."
  },
  {
    "by": "Robert Collier",
    "quote": "Kesempatan Anda untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan Anda pada diri sendiri."
  },
  {
    "by": "Robert F. Kennedy",
    "quote": "Kemajuan merupakan kata-kata merdu, tetapi perubahanlah penggerakknya dan perubahan mempunyai banyak musuh."
  },
  {
    "by": "Robert Frost",
    "quote": "Dua jalan dipisahkan pohon, dan saya mengambil jalan yang jarang ditempuh orang. Dan itulah yang membuat perubahan."
  },
  {
    "by": "Robert Frost",
    "quote": "Alasan mengapa kecemasan membunuh lebih banyak orang dibanding kerja adalah, lebih banyak orang cemas dibanding bekerja."
  },
  {
    "by": "Robert G. Ingersoll",
    "quote": "Sedikit orang kaya yang memiliki harta. Kebanyakan harta yang memiliki mereka."
  },
  {
    "by": "Robert Half",
    "quote": "Ketekunan bisa membuat yang tidak mungkin jadi mungkin, membuat kemungkinan jadi kemungkinan besar, dan kemungkinan besar menjadi pasti."
  },
  {
    "by": "Robert S. Lynd",
    "quote": "Hanya ikan yang bodoh yang bisa dua kali kena pancing dengan umpan yang sama."
  },
  {
    "by": "Robert Von Hartman",
    "quote": "Ambisi seperti air laut, semakin banyak orang meminumnya semakin orang menjadi haus."
  },
  {
    "by": "Robinsori",
    "quote": "Cemas dan ketakutan adalah akibat kebodohan dan keraguan."
  },
  {
    "by": "Romand Rolland",
    "quote": "Pahlawan adalah seseorang yang melakukan apa yang mampu dia lakukan."
  },
  {
    "by": "Roosevelt",
    "quote": "Jika Anda ingin menjadi orang besar, janganlah suka beromong besar, kerjakanlah hal-hal yang kecil dahulu."
  },
  {
    "by": "Ross Cooper",
    "quote": "Satu-satunya cara untuk mengubah hidup kita adalah dengan mengubah pikiran kita."
  },
  {
    "by": "Ruth P. Freedman",
    "quote": "Perubahan terjadi ketika seseorang menjadi dirinya sendiri, bukan ketika ia mencoba menjadi orang lain."
  },
  {
    "by": "Salanter Lipkin",
    "quote": "Perbaiki diri Anda, tetapi jangan jatuhkan orang lain."
  },
  {
    "by": "Samuel Smiles",
    "quote": "Cara tercepat untuk menuntaskan banyak hal adalah dengan menyelesaikannya satu demi satu."
  },
  {
    "by": "Satya Sai Baba",
    "quote": "Dua hal yang harus dilupakan, kebaikan yang telah kita lakukan kepada orang lain dan kesalahan orang lain kepada kita."
  },
  {
    "by": "Scott Fitzgerald",
    "quote": "Ingatlah, jika Anda menutup mulut sebenarnya Anda telah melakukan pilihan."
  },
  {
    "by": "Seneca",
    "quote": "Hati manusia tidak akan pernah tenteram sebelum berdamai dengan diri sendiri."
  },
  {
    "by": "Seneca",
    "quote": "Hidup berarti berjuang. Hidup nikmat tanpa badai topan adalah laksana laut yang mati."
  },
  {
    "by": "Shackespeare",
    "quote": "Kesedihan hanya bisa ditanggulangi oleh orang yang mengalaminya sendiri."
  },
  {
    "by": "Shirley Briggs",
    "quote": "Beranikan diri untuk menjadi dirimu sendiri, karena kita bisa melakukan hal itu lebih baik daripada orang lain."
  },
  {
    "by": "Soe Hok Gie",
    "quote": "Lebih baik diasingkan daripada menyerah kepada kemunafikan."
  },
  {
    "by": "Soemantri Metodipuro",
    "quote": "Langkah pertama untuk memilih keyakinan pada diri sendiri adalah mengenal diri kita sendiri."
  },
  {
    "by": "Sophocles",
    "quote": "Bila seseorang kehilangan segala sumber kebahagiaan, dia tidak lagi hidup, tapi mayat yang bernafas."
  },
  {
    "by": "St. Jerome",
    "quote": "Baik, lebih baik, terbaik. Jangan pernah berhenti sampai baik menjadi lebih baik, dan lebih baik menjadi terbaik."
  },
  {
    "by": "Stephen R. Covey",
    "quote": "Motivasi adalah api dari dalam. Jika orang lain mencoba menyalakannya untuk Anda, kemungkinan apinya hanya menyala sebentar."
  },
  {
    "by": "Steve Jobs",
    "quote": "Saya bangga, baik pada hal yang tidak kami lakukan maupun pada hal yang kami lakukan."
  },
  {
    "by": "Sujiwo Tejo",
    "quote": "Cinta tak perlu pengorbanan. Pada saat kau merasa berkorban, pada saat itu cintamu mulai pudar."
  },
  {
    "by": "Sydney Harris",
    "quote": "Ancaman nyata sebenarnya bukan pada saat komputer mulai bisa berpikir seperti manusia, tetapi ketika manusia mulai berpikir seperti komputer."
  },
  {
    "by": "Theodore Rosevelt",
    "quote": "Lakukan apa yang dapat Anda lakukan dengan apa yang Anda miliki dan tempat Anda berada."
  },
  {
    "by": "Thomas Alva Edison",
    "quote": "Banyak kegagalan dalam ini dikarenakan orang-orang tidak menyadari betapa dekatnya mereka dengan keberhasilan saat mereka menyerah."
  },
  {
    "by": "Thomas Carlyle",
    "quote": "Pergilah sejauh mungkin yang bisa Anda lihat dan Anda akan bisa melihat lebih jauh."
  },
  {
    "by": "Thomas Fuller",
    "quote": "Orang yang tidak bisa memaafkan orang lain sama saja dengan orang yang memutuskan jembatan yang harus dilaluinya, karena semua orang perlu dimaafkan."
  },
  {
    "by": "Thomas Fuller",
    "quote": "Menyaksikan adalah mempercayai, tapi merasakan adalah kebenaran."
  },
  {
    "by": "Thomas Jefferson",
    "quote": "Dalam hal prinsip, usahakan kukuh seperti batu karang. Dalam hal selera, coba berenang mengikuti arus."
  },
  {
    "by": "Tung Desem Waringin",
    "quote": "Setiap badai pasti berlalu dan saya akan tumbuh semakin kuat."
  },
  {
    "by": "Tyler Durden",
    "quote": "Setelah kehilangan segalanya, barulah kita bebas melakukan apa saja."
  },
  {
    "by": "Umar bin Khattab",
    "quote": "Raihlah ilmu dan untuk meraih ilmu belajarlah untuk tenang dan sabar."
  },
  {
    "by": "Vicosta Efran",
    "quote": "Hiduplah seperti lilin yang menerangi orang lain. Jangan hidup seperti duri yang mencucuk diri dan menyakiti orang lain."
  },
  {
    "by": "Victor Hugo",
    "quote": "Kesedihan adalah buah. Tuhan tak pernah membiarkannya tumbuh dicabang yang terlalu lemah untuk menanggungnya."
  },
  {
    "by": "Victor Hugo",
    "quote": "Kebahagian tertinggi dalam kehidupan adalah kepastian bahwa Anda dicintai apa adanya, atau lebih tepatnya dicintai walaupun Anda seperti diri Anda adanya."
  },
  {
    "by": "Victor Hugo",
    "quote": "Masalahnya bukan kurangnya tenaga, tetapi kurangnya daya kemauan."
  },
  {
    "by": "Vince Lambardi",
    "quote": "Kemenangan bukanlah segala-galanya, tetapi perjuangan untuk menang adalah segala-galanya."
  },
  {
    "by": "Virginia Wolf",
    "quote": "Jika Anda tak bisa mengatakan hal yang benar dari diri Anda, maka Anda pun tak bisa mengatakan hal yang benar dari orang lain."
  },
  {
    "by": "W. Camden",
    "quote": "Burung yang terbang pagi akan memperoleh cacing paling banyak."
  },
  {
    "by": "Walt Disney",
    "quote": "Cara untuk memulai adalah berhenti berbicara dan mulai lakukan sesuatu."
  },
  {
    "by": "Walter Cronkite",
    "quote": "Sukses akan lebih permanen jika Anda meraihnya tanpa menghancurkan prinsip-prinsip Anda."
  },
  {
    "by": "Warren Buffett",
    "quote": "Dari dulu saya selalu yakin saya akan kaya. Saya kira saya tak pernah meragukannya, satu menit pun."
  },
  {
    "by": "Whitney Young",
    "quote": "Lebih baik menyiapkan diri untuk sebuah peluang dan tidak mendapatkannya daripada punya peluang dan tidak menyiapkan diri."
  },
  {
    "by": "William A. W.",
    "quote": "Satu-satunya yang bisa menghalangi kita adalah keyakinan yang salah dan sikap yang negatif."
  },
  {
    "by": "William Allen White",
    "quote": "Saya tidak takut pada hari esok karena saya sudah melihat hari kemarin dan saya mencintai hari ini."
  },
  {
    "by": "William Arthur",
    "quote": "Guru yang biasa-biasa, berbicara. Guru yang bagus, menerangkan. Guru yang hebat, mendemonstrasikan. Guru yang agung, memberi inspirasi."
  },
  {
    "by": "William F. Halsey",
    "quote": "Semua masalah menjadi lebih kecil jika Anda tidak mengelaknya, tapi menghadapinya."
  },
  {
    "by": "William J. Johnston",
    "quote": "Perubahan yang paling bermakna dalam hidup adalah perubahan sikap. Sikap yang benar akan menghasilkan tindakan yang benar."
  },
  {
    "by": "William James",
    "quote": "Jika Anda harus membuat pilihan dan Anda tidak melakukannya, itu saja sudah pilihan."
  },
  {
    "by": "William James",
    "quote": "Percaya bahwa hidup itu berharga, dan kepercayaan Anda akan membantu menciptakan hidup yang berharga."
  },
  {
    "by": "William Ralph Inge",
    "quote": "Kuatir sama seperti membayar bunga untuk uang yang mungkin tak pernah Anda pinjam."
  },
  {
    "by": "William Shakespeare",
    "quote": "Jangan sering menyalakan api kebencian terhadap musuhmu, karena nanti akan membakar dirimu sendiri."
  },
  {
    "by": "William Shakespeare",
    "quote": "Bila kamu jujur kepada dirimu sendiri, bagai siang pasti berganti malam, kamu takkan pernah berdusta kepada orang lain."
  },
  {
    "by": "William Shakespeare",
    "quote": "Kutu yang berani adalah kutu yang bisa berani mendapatkan sarapannya pada bibir seekor singa."
  },
  {
    "by": "Winston Churchill",
    "quote": "Kita menyambung hidup dengan apa yang kita peroleh, tapi kita menghadirkan kehidupkan dengan apa yang kita berikan."
  },
  {
    "by": "Wolfgang von Gothe",
    "quote": "Pengetahuan tidaklah cukup, kita harus mengamalkannya. Niat tidak cukup, kita harus melakukannya."
  },
  {
    "by": "Zachary Scott",
    "quote": "Ketika Anda bertambah tua, Anda akan menemukan satu-satunya hal yang Anda sesali adalah hal-hal yang tidak Anda lakukan."
  },
  {
    "by": "Zig Zaglar",
    "quote": "Batu fondasi untuk sukses yang seimbang adalah kejujuran, watak, integritas, iman, cinta dan kesetiaan."
  },
  {
    "by": "Zig Zaglar",
    "quote": "Kebanyakan orang gagal meraih cita-citanya bukan karena mereka tidak mampu, tetapi karena tidak berkomitmen."
  },
  {
    "by": "Zig Zaglar",
    "quote": "Kita tidak harus hebat saat memulai, tapi kita harus memulai untuk menjadi hebat."
  }
]

global.bijak = [
"Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
"Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
"Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
"Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
"Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
"Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
"Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
"Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
"Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
"Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
"Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
"Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
"Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
"Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
"Hidup tak selamanya tentang pacar.",
"Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
"Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
"Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
"Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
"Aku memang diam. Tapi aku tidak buta.",
]

global.heker = [
  "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
  "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
  "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
  "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
  "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
  "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
  "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
  "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
  "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
  "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
  "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
  "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
  "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
  "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
  "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
  "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
  "SQLI ( Structured Query Love Injection )",
  "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
  "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
  "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
  "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
  "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
  "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
  "Jangan men-dualboot-kan hatiku kepadamu.",
  "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
  "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
  "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
  "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

global.gombal = [
"Kamu tau gak? Kenapa kalau aku menghafal lihatnya ke atas? soalnya kalau merem langsung kebayang wajahmu.",
"Orang kurus itu setia, makan aja tidak pernah nambah apalagi pasangan.",
"Kamu tu kayak warteg, sederhana namun berkualitas.",
"Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
"Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
"Kamu tau gak apa persamaannya kamu sama AC? Sama-sama bikin aku sejuk.",
"Aku hanya ingin hidup cukup. Cukup lihat senyummu setiap hari.",
"Aku rela ikut lomba lari keliling dunia, asalkan engkau yang menjadi garis finisnya.",
"Kalau orang kebutuhan primernya ada tiga yaitu sandang pangan dan papan, tapi kalau aku : kamu, kamu, kamu.",
"Cita-citaku dulu pengen jadi dokter, tapi setelah mengenalmu, berubah jadi ingin membahagiakanmu.",
"Enak ya jadi kamu, kalau mau liat bidadari, tinggal liat di kaca.",
"Jika kamu tanya berapa kali kamu datang ke pikiranku, jujur saja, cuma sekali. Habisnya, gak pergi-pergi sih!",
"Jangan GR deh. Aku kangen kamu sedikit aja kok. Sedikit berlebihan maksudnya.",
"Tanggal merah sekalipun aku tidak libur untuk memikirkan kamu.",
"Cintaku padamu bagai diare. Tak bisa kutahan, terus keluar begitu saja.",
"Aku ga lulus ulangan umum sayang, gara-gara di bagian essay-nya aku tulis surat cinta buat kamu.",
"Tahu gak kenapa kita cuma bisa lihat pelangi setengah lingkaran? Sebab setengahnya lagi ada di mata kamu.",
"Kalo kamu lagi di AS, Patung Liberty ga akan bawa obor tapi bakal bawa BUNGA!",
"Aku rela jadi abang nasi goreng asalkan setiap malam aku bisa lewat depan rumah kamu.",
"Aku rela dipenjara seumur hidup asalkan pelanggarannya karena mencintaimu.",
"Kamu tau gak? Lukisan itukan makin lama makin antik, kalo kamu makin lama makin cantik",
]

global.galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]

global.motivasi = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa'
]