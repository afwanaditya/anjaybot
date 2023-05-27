const PhoneNumber = require('awesome-phonenumber')
exports.run = {
   usage: ['owner', 'sewabot'],
   category: 'about',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner Ganteng'
      }], m)
   },
   error: false,
   cache: true,
   location: __filename
}

   client.sendContact = async (jid, contact, quoted, opts = {}) => {
      let list = []
      contact.map(v => list.push({
         displayName: v.name,
         vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${v.name}\nORG:Pacarnya Rizka\nTEL;type=CELL;type=VOICE;waid=${v.number}:${PhoneNumber('+' + v.number).getNumber('international')}\nEMAIL;type=Email:@aditngemim\nURL;type=Website:https://anjaybot.my.id\nADR;type=Location:;;KOTA TEGAL;;\nOther:${v.about}\nEND:VCARD`
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