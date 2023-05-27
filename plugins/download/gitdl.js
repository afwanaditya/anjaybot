exports.run = {
   usage: ['git', 'github', 'gitclone'],
   use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://github.com/alya-tok/bot-alya'), m)
         let fetch = require('node-fetch')
         let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i          
    if (!regex1.test(args[0])) return client.reply(m.chat, 'link salah dan tidak valid*', m)            
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    //hisoka.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('Maaf link github yang kamu berikan di private, dan tidak bisa di jadikan file'))
  client.sendMessage(m.chat, {document:{url:url}, fileName: filename+'.zip', mimetype:"application/zip", ptt:false, contextInfo:{externalAdReply:{title: `${filename}`,body:"GITHUB USER",thumbnail: await Func.fetchBuffer('https://telegra.ph/file/fab24bae3a9827dac4edf.png'),mediaType:2,mediaUrl: `${args[0]}`,sourceUrl: `${args[0]}`}}}, {quoted:m})           
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}