exports.run = {
   async: async (m, {
      client,
      body,
      groupSet
   }) => {
      try {
       client.menfes = client.menfes ? client.menfes : {}
		const find = Object.values(client.menfes).find(id => [id.to, id.id].includes(m.sender))
		if(!find) return
		const to = m.sender == find.id ? find.to : find.id
		const onWa =  await client.onWhatsApp(to)
		if(onWa == ''){
			delete client.menfes[find.id]
		}
		await client.copyNForward(to, m, true)
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   private: true,
   cache: true,
   location: __filename
}
 
// simple creatif dari crator bot dan jangn ubah disini jika di ubah maka akan terjadi error, kalo sudah kalian ubah admin sudah tidak bertanggung jawab atas apa yang kalian ubah di file ini:) sekian terimakasih
 
const {
  proto,
  jidDecode,
  downloadContentFromMessage,
  getContentType,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  generateWAMessageContent,
} = require("baileys")
client.copyNForward = async (jid, message, forceForward = false, options = {}) => {
    let vtype;
    if (options.readViewOnce) {
      message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : message.message || undefined;
      vtype = Object.keys(message.message.viewOnceMessage.message)[0];
      delete (message.message && message.message.ignore ? message.message.ignore : message.message || undefined);
      delete message.message.viewOnceMessage.message[vtype].viewOnce;
      message.message = {
        ...message.message.viewOnceMessage.message,
      };
    }
    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};
    if (mtype != m.type) context = message.message[mtype].contextInfo;
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo,
      ...(options.contextInfo ?
        {
          ...options.contextInfo,
        } :
        {}),
    };
    const waMessage = await generateWAMessageFromContent(jid, content, options ? {
      ...content[ctype],
      ...options,
      ...(options.contextInfo ?
        {
          contextInfo: {
            ...content[ctype].contextInfo,
            ...options.contextInfo,
          },
        } :
        {}),
    } :
      {}
    );
    await client.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };