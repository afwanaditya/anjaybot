const moment = require('moment-timezone')
const axios = require('axios')
exports.run = {
   usage: ['githubstalk'],
   use: 'query',
   category: 'searching',
   async: async (m, {
      client,
      args,
      text,
      isPrefix,
      command
   }) => {
      try {
if (!text) return client.reply(m.chat, `• *Example* : ${isPrefix + command} dandyproject`, m)
axios.get(`https://api.github.com/users/${text}`)
.then((res) => res.data)
.then((res) =>{
let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
global.sp = '◦'
let txt = `*G H - S T A L K*

  ${global.sp}  *Username :* ${login}
  ${global.sp}  *Name :* ${name}
  ${global.sp}  *Followers :* ${followers}
  ${global.sp}  *Following :* ${following}
  ${global.sp}  *Created at :* ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
  ${global.sp}  *Updated at :* ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
  ${global.sp}  *Public Gists :* ${public_gists}
  ${global.sp}  *Public Repos :* ${public_repos}
  ${global.sp}  *Twitter :* ${twitter_username}
  ${global.sp}  *Email :* ${email}
  ${global.sp}  *Location :* ${location}
  ${global.sp}  *Blog :* ${blog}
  ${global.sp}  *Link :* ${html_url}
  ${global.sp}  *Bio :* ${bio}

${global.footer}`
client.sendFile(m.chat, avatar_url, '', txt, m)
})
.catch((err) => {
console.log(err)
})
} catch (e) {
return client.reply(m.chat, Func.jsonFormat(e), m)
 }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}