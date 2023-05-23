const { useMultiFileAuthState, DisconnectReason, makeInMemoryStore, msgRetryCounterMap, delay } = require('baileys')
const pino = require('pino'), path = require('path'), fs = require('fs'), colors = require('@colors/colors/safe'), qrcode = require('qrcode-terminal'), axios = require('axios'), spinnies = new (require('spinnies'))()
global.component = new (require('ds-func'))
const { Extra, Function, MongoDB } = component
const { Socket, Serialize, Scandir } = Extra
if (process.env.DATABASE_URL) {
   MongoDB.db = global.database
}
global.props = process.env.DATABASE_URL ? MongoDB : new(require('./system/localdb'))(global.database)
global.Func = Function
//global.scrap = Scraper
global.scrap = new (require('./system/scraper'))
global.store = makeInMemoryStore({
   logger: pino().child({
      level: 'silent',
      stream: 'store'
   })
})

const connect = async () => {
   require('./system/config')
   const { state, saveCreds } = await useMultiFileAuthState('session')
   global.db = {users:[], chats:[], groups:[], statistic:{}, sticker:{}, setting:{}, ...(await props.fetch() ||{})}
   await props.save(global.db)
   global.client = Socket({
      logger: pino({
         level: 'silent'
      }),
      printQRInTerminal: true,
      browser: ['@dandisubhani_ / nolep bot', 'safari', '1.0.0'],
      auth: state,
      connectTimeoutMs: 60_000,
      defaultQueryTimeoutMs: 0,
      keepAliveIntervalMs: 10000,
      // To see the latest version : https://web.whatsapp.com/check-update?version=1&platform=web
      version: [2, 2245, 9]
   })

   store.bind(client.ev)
   client.ev.on('connection.update', async (update) => {
      const {
         connection,
         lastDisconnect,
         qr
      } = update
      if (lastDisconnect == 'undefined' && qr != 'undefined') {
         qrcode.generate(qr, {
            small: true
         })
      }
      if (connection === 'connecting') spinnies.add('start', {
         text: 'Connecting . . .'
      })
      if (connection === 'open') {
         spinnies.succeed('start', {
            text: `Connected, you login as ${client.user.name || client.user.verifiedName}`
         })
      }
      if (connection === 'close') {
         if (lastDisconnect.error.output.statusCode == DisconnectReason.loggedOut) {
            spinnies.fail('start', {
               text: `Can't connect to Web Socket`
            })
            await props.save()
            process.exit(0)
         } else {
            connect().catch(() => connect())
         }
      }
   })

   client.ev.on('creds.update', saveCreds)

   client.ev.on('messages.upsert', async chatUpdate => {
      try {
         m = chatUpdate.messages[0]
         if (!m.message) return
         Serialize(client, m)
         Scandir('./plugins').then(files => {
            global.client.plugins = Object.fromEntries(files.filter(v => v.endsWith('.js')).map(file => [path.basename(file).replace('.js', ''), require(file)]))
         }).catch(e => console.error(e))
         require('./system/baileys'), require('./handler')(client, m)
      } catch (e) {
         console.log(e)
      }
   })

   client.ev.on('contacts.update', update => {
      for (let contact of update) {
         let id = client.decodeJid(contact.id)
         if (store && store.contacts) store.contacts[id] = {
            id,
            name: contact.notify
         }
      }
   })

    client.ev.on('group-participants.update', async (room) => {
      let meta = await (await client.groupMetadata(room.id))
      let member = room.participants[0]
      let text_welcome = `Selamat +tag di Grup +grup mari kita sambit.`
      let text_left = `+tag Telah keluar grup cuy`
      let groupSet = global.db.groups.find(v => v.jid == room.id)
      try {
         pic = await Func.fetchBuffer(await client.profilePictureUrl(member, 'image'))
      } catch {
         pic = await Func.fetchBuffer(await client.profilePictureUrl(room.id, 'image'))
      }
      if (room.action == 'add') {
         if (groupSet.localonly) {
            if (global.db.users.some(v => v.jid == member) && !global.db.users.find(v => v.jid == member).whitelist && !member.startsWith('62') || !member.startsWith('62')) {
               client.reply(room.id, Func.texted('bold', `Sorry @${member.split`@`[0]}, Grup ini khusus people +62 azzah bro, utiwi kick.`))
               client.updateBlockStatus(member, 'block')
               return await Func.delay(2000).then(() => client.groupParticipantsUpdate(room.id, [member], 'remove'))
            }
         
         

            }
         if (groupSet && groupSet.captcha) {
            const captcha = require('@neoxr/captcha')
            let newCaptcha = captcha()
            let image = Buffer.from(newCaptcha.image.split(',')[1], 'base64')
            let caption = `Hai @${member.split('@')[0]} 👋🏻\n`
            caption += `Selamat datang di grup *${meta.subject}* sebelum melakukan aktifitas didalam grup lakukan *VERIFIKASI* dengan mengirimkan *KODE CAPTCHA* pada gambar diatas.\n\nJika Tidak maka akan di keluarkan dari grup karena di anggap orang buta gabisa nimbrung (sider)\n\n`
            caption += `*Segera verifikasi sebelum* : [ 10 menit ]`
            global.db.captcha = global.db.captcha ? global.db.captcha : {}
            global.db.captcha[member] = {
               chat: await client.sendMessageModify(room.id, caption, null, {
                  largeThumb: true,
                  thumbnail: image,
                  url: global.db.setting.link
               }),
               to: member,
               groupId: room.id,
               code: newCaptcha.value,
               wrong: 0,
               timeout: setTimeout(() => {
                  if (global.db.captcha[member]) return client.reply(room.id, Func.texted('bold', `Woi @${member.split`@`[0]} gamau verifikasi`)).then(async () => {
                     client.groupParticipantsUpdate(room.id, [member], 'remove')
                     delete global.db.captcha[member]
                  })
               }, 600_000)
            }
         }
         let txt = (groupSet && groupSet.text_welcome != '' ? groupSet.text_welcome : text_welcome).replace('+tag', `@${member.split`@`[0]}`).replace('+grup', `${meta.subject}`)
         if (groupSet && !groupSet.captcha && groupSet.welcome) client.sendMessageModify(room.id, txt, null, {
            largeThumb: true,
            thumbnail: pic,
            url: global.db.setting.link
         })
         
      } else if (room.action == 'remove') {
         let txt = (groupSet.text_left != '' ? groupSet.text_left : text_left).replace('+tag', `@${member.split`@`[0]}`).replace('+grup', `${meta.subject}`)
         if (groupSet.left) client.sendMessageModify(room.id, txt, null, {
            largeThumb: true,
            thumbnail: pic,
            url: global.db.setting.link
         })
      }
   })


   setInterval(async () => {
      if (global.db) await props.save(global.db)
   }, 30_000)
   
   return client
}

connect().catch(() => connect())