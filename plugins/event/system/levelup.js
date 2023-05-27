const canvacord = require('canvacord')
exports.run = {
   async: async (m, {
      client,
      users,
      body,
      setting
   }) => {
      try {
         let levelAwal = Func.level(users.point, global.multiplier)[0]
         if (users && body) users.point += Func.randomInt(1, 100)
         let levelAkhir = Func.level(users.point, global.multiplier)[0]
         try {
            pic = await client.profilePictureUrl(m.sender, 'image')
         } catch {
            pic = 'https://telegra.ph/file/8937de46430b0e4141a1c.jpg'
         }
         const point = global.db.users.sort((a, b) => b.point - a.point).map(v => v.jid)
         const rank = new canvacord.Rank()
            .setRank(point.indexOf(m.sender) + 1)
            .setLevel(Func.level(users.point, global.multiplier)[0])
            .setAvatar(pic)
            .setCurrentXP(users.point)
            .setRequiredXP(Func.level(users.point, global.multiplier)[1])
            .setStatus('online')
            .setProgressBar('#FFFFFF', 'COLOR')
            .setUsername(m.pushName)
            .setDiscriminator(Func.randomInt(1000, 9999))
         if (levelAwal != levelAkhir && setting.levelup) client.sendFile(m.chat, await rank.build(), 'level.jpg', `乂  *L E V E L - N A I K*\n\nDari : [ *${levelAwal}* ] ➠ [ *${levelAkhir}* ]\n*Selamat!*, kamu naik level 🎉🎉🎉`, m)
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}