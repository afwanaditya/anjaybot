const PhoneNumber = require('awesome-phonenumber')
exports.run = {
   usage: ['contact'],
   use: 'mention or reply',
   category: 'group',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
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
         let ap = await client.fetchStatus(user)
         let afa = ap.status ? ap.status : 'no about'
         client.sendContact(m.chat, 'Saved!', user.split`@` [0], m)
         client.sendContact(m.chat, [{
         name: await client.getName(user),
         number: `${user.split(`@`)[0]}`,
         about: afa
      }], m)
      }
   },
   error: false,
   group: true
}

   client.sendContact = async (jid, contact, quoted, opts = {}) => {
      let list = []
      contact.map(v => list.push({
         displayName: v.name,
         vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${v.name}\nORG:Dandy Production\nTEL;type=CELL;type=VOICE;waid=${v.number}:${PhoneNumber('+' + v.number).getNumber('international')}\nEMAIL;type=Email:@dandisubhani_\nURL;type=Website:https://nolep.danzdev.my.id\nADR;type=Location:;;JAKARTA;;\nOther:${v.about}\nEND:VCARD`
      }))
      return client.sendMessage(jid, {
         contacts: {
            displayName: `${list.length} Contact`,
            contacts: list
         },
         ...opts
      }, {
         quoted
      })
   }