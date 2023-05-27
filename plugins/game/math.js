exports.run = {
   usage: ['matematika', 'math'],
   use: 'mode',
   category: 'fun games',
   async: async (m, {
      client,
      args,
      isOwner,
      isPrefix
   }) => {
   
      client.math = client.math ? client.math : {}
      let id = m.chat
      let timeout = 120000
      if (id in client.math) return client.reply(m.chat, '*^ pertanyaan ini belum dijawab!*', client.math[id][0])
      let arr_mode = ['noob', 'easy', 'medium', 'hard']
      let _mode = arr_mode[Math.floor(Math.random() * arr_mode.length)]
      let math = genMath(args[0] ? args[0].toLowerCase() : _mode)
      client.math[id] = [
         await client.reply(m.chat, `*M A T H*\n\nBerapa hasil dari *${math.str}* ?\n\nTimeout : [ *${(timeout / 1000).toFixed(2)} seconds* ]\nKetik *${isPrefix}mathskip* untuk melewatkan pertanyaan ini.`, m),
         math, 3,
         setTimeout(() => {
            if (client.math[id]) client.reply(m.chat, `*Waktunya habis!*\nJawabannya adalah : *${math.result}*`, client.math[id][0])
            delete client.math[id]
         }, timeout)
      ]
   },
   
   quota: true,
   error: false,
   cache: true,
   location: __filename
}

let modes = {
   noob: [-3, 3, -3, 3, '+-', 15000, 10],
   easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
   medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
   hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
   extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
   impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
   impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
   '+': '+',
   '-': '-',
   '*': '×',
   '/': '÷'
}

function genMath(mode) {
   let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
   let a = randomInt(a1, a2)
   let b = randomInt(b1, b2)
   let op = pickRandom([...ops])
   let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
   if (op == '/')[a, result] = [result, a]
   return {
      str: `${a} ${operators[op]} ${b}`,
      mode,
      time,
      bonus,
      result
   }
}

function randomInt(from, to) {
   if (from > to)[from, to] = [to, from]
   from = Math.floor(from)
   to = Math.floor(to)
   return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
}