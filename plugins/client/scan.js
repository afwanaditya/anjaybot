const fs = require('fs')
const baileys = fs.existsSync('./node_modules/baileys') ? 'baileys' : fs.existsSync('./node_modules/@adiwajshing/baileys') ? '@adiwajshing/baileys' : 'bails'
const { useMultiFileAuthState, DisconnectReason, makeInMemoryStore, msgRetryCounterMap, delay } = require(baileys)
const pino = require('pino'),
   qrcode = require('qrcode'),
   path = require('path'),
   spinnies = new(require('spinnies'))()
exports.run = {
   usage: ['jadibot'],
   hidden: ['on', 'scan'],
   category: 'client',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      groupSet
   }) => {
      try {
         const { Extra } = component
         const { Socket, Serialize, Scandir } = Extra
         let parent = client
         global.db.bots = global.db.bots ? global.db.bots : []
         global.tryConnect = global.tryConnect ? global.tryConnect : []
         if (global.db.bots.length >= 3) return m.reply(Func.texted('bold', `🚩 Sorry, slots are full.`))
         global.tryConnect.push({
            jid: m.sender,
            retry: 0
         })
         if (/on|jadibot|scan/.test(command) && global.db.bots.some(v => v.sender == m.sender && v.is_connected)) return m.reply(`✅ Your bot is connected.`)
         if (/on|jadibot|scan/.test(command) && global.client.user.id != client.user.id) return m.reply(`🪸 Chat the main bot here : https://wa.me/${client.decodeJid(global.client.user.id).replace(/@.+/,'')}?text=scan`)
         var credsExists = global.db.bots.find(v => v.sender == m.sender && !v.is_connected && v.session)
         var sessionPath = credsExists ? credsExists.sender.split('@')[0] : m.sender.split('@')[0]
         if (credsExists && !fs.existsSync(`./lib/sessions/${sessionPath}`)) {
            fs.mkdirSync(`./lib/sessions/${sessionPath}`)
            // await delay(1500)
            // fs.writeFileSync(`./lib/sessions/${sessionPath}/creds.json`, JSON.parse(JSON.stringify(credsExists.session)))
         }
         await delay(1500)
         const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `../../lib/sessions/${sessionPath}`))
         const store = makeInMemoryStore({
            logger: pino().child({
               level: 'silent',
               stream: 'store'
            })
         })

         const connect = async () => {
            const client = Socket({
               logger: pino({
                  level: 'silent'
               }),
               printQRInTerminal: false,
               patchMessageBeforeSending: (message) => {
                  const requiresPatch = !!(
                     message.buttonsMessage ||
                     message.templateMessage ||
                     message.listMessage
                  );
                  if (requiresPatch) {
                     message = {
                        viewOnceMessage: {
                           message: {
                              messageContextInfo: {
                                 deviceListMetadataVersion: 2,
                                 deviceListMetadata: {},
                              },
                              ...message,
                           },
                        },
                     }
                  }
                  return message
               },
               browser: ['@anjaybotv2 / Aditya', 'safari', '1.0.0'],
               auth: state,
               msgRetryCounterMap,
               getMessage: async (key) => {
                  if (store) {
                     const msg = await store.loadMessage(key.remoteJid, key.id)
                     return msg.message || undefined
                  }
                  return {
                     conversation: 'hello'
                  }
               },
               // To see the latest version : https://web.whatsapp.com/check-update?version=1&platform=web
               version: [2, 2301, 6]
            })

            store.bind(client.ev)
            client.ev.on('connection.update', async (update) => {
               const {
                  connection,
                  lastDisconnect,
                  qr
               } = update
               if (qr) {
                  const tr = global.tryConnect.find(v => v.jid == m.sender)
                  if (tr && tr.retry >= 3) return m.reply(`❌ Connection attempts have reached the maximum limit, please try again.`).then(() => {
                     Func.removeItem(global.tryConnect, tr)
                     return client.end()
                  })
                  if (tr) tr.retry += 1
                  if (!tr) return
                  const isQr = await qrcode.toDataURL(qr, {
                     scale: 8
                  })
                  let text = `乂  *TUTORIAL JADI BOT*\n\n`
                  text += `1. Pergi ke beranda WhatsApp, tekan titik tiga yang berada di pojok kanan atas dan pilih *Linked Devices/Tautkan perangkat*.\n`
                  text += `2. Kemudian Scan kode QR.\n`
                  text += `3. Kode QR akan kadaluarsa dalam 30 detik.\n`
                  text += `\nCatatan: dibutuhkan 2 perangkat (HP) untuk Scan QR\n`
                  parent.sendFile(m.chat, Buffer.from(isQr.split(',')[1], 'base64'), 'qr.png', text, m)
               } else if (connection === 'open') {
                  m.reply(`✅ Connected, you login as ${client.user.name}.`).then(() => {
                     parent.reply(global.forwards, `📩 New bot connected : @${client.decodeJid(client.user.id).replace(/@.+/,'')}`)
                     if (credsExists) {
                        credsExists.is_connected = true
                        credsExists.last_connect = new Date * 1
                     }
                  })
                  let isBot = global.db.bots.find(v => v.jid == client.decodeJid(client.user.id))
                  if (isBot) {
                     isBot.is_connected = true
                     isBot.last_connect = new Date * 1
                  } else {
                     global.db.bots.push({
                        jid: client.decodeJid(client.user.id),
                        sender: m.sender,
                        last_connect: new Date * 1,
                        is_connected: true,
                        session: fs.readFileSync(`./lib/sessions/${sessionPath}/creds.json`, 'utf-8')
                     })
                  }
                  await delay(1500)
                  spinnies.add('start', {
                     text: 'Load Plugins . . .'
                  })
                  const plugins = await Scandir('plugins')
                  plugins.filter(v => v.endsWith('.js')).map(file => require(file))
                  await delay(1000)
                  spinnies.succeed('start', {
                     text: `${plugins.length} Plugins loaded`
                  })
               } else if (connection === 'close') {
                  if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode == DisconnectReason.restartRequired) {
                     let isBot = global.db.bots.find(v => v.sender == m.sender)
                     if (isBot) isBot.is_connected = false
                     m.reply(`🚩 Send *${isPrefix}on* to starting your bot.`).then(() => client.end())
                     connect().catch(() => connect())
                  } else if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode == DisconnectReason.loggedOut) {
                     m.reply(`❌ Can't connect to Web Socket.`)
                     const p = global.db.bots.find(v => v.jid == m.sender)
                     fs.rmSync(`./lib/sessions/${sessionPath}`, {
                        recursive: true,
                        force: true
                     })
                     Func.removeItem(global.db.bots, p)
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
                  const files = await Scandir('./plugins')
                  const plugins = Object.fromEntries(files.filter(v => v.endsWith('.js')).map(file => [path.basename(file).replace('.js', ''), require(file)]))
                  client.plugins = Object.fromEntries(files.filter(v => v.endsWith('.js')).map(file => [path.basename(file).replace('.js', ''), require(file)]))
                  require('../../system/scraper'), require('../../system/function'), require('../../system/baileys'), require('../../handler')(client, m, plugins)
               } catch (e) {
                  console.log(e)
               }
            })

            client.ev.on('group-participants.update', async (room) => {
               let meta = await (await client.groupMetadata(room.id))
               let member = room.participants[0]
               let text_welcome = `Thanks +tag for joining into +grup group.`
               let text_left = `+tag left from this group for no apparent reason.`
               let groupSet = global.db.groups.find(v => v.jid == room.id)
               try {
                  pic = await Func.fetchBuffer(await client.profilePictureUrl(member, 'image'))
               } catch {
                  pic = await Func.fetchBuffer(await client.profilePictureUrl(room.id, 'image'))
               }
               if (room.action == 'add') {
                  let txt = (groupSet.text_welcome != '' ? groupSet.text_welcome : text_welcome).replace('+tag', `@${member.split`@`[0]}`).replace('+grup', `${meta.subject}`)
                  if (groupSet.welcome) client.sendMessageModify(room.id, txt, null, {
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

            client.ev.on('contacts.update', update => {
               for (let contact of update) {
                  let id = client.decodeJid(contact.id)
                  if (store && store.contacts) store.contacts[id] = {
                     id,
                     name: contact.notify
                  }
               }
            })

            client.ws.on('CB:call', async json => {
               if (json.content[0].tag == 'offer') {
                  let object = json.content[0].attrs['call-creator']
                  await Func.delay(3000)
                  await client.updateBlockStatus(object, 'block')
               }
            })
         }
         connect().catch(() => connect())
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   premium: true,
   private: true,
   auth: true
}