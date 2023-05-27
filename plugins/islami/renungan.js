exports.run = {
	usage: ['quoteislam'],
	category: 'islami',
	async: async(m, {
	client
	}) => {
	   try {
	   client.sendFile(m.chat, `https://api.akuari.my.id/islami/renunganislam`, Func.filename('jpg'), `*Renungan Islami by Qara'a*`, m)
	   } catch {
	   client.reply(m.chat, global.status.error, m)
	   }
	},
	error: false,
	limit: true
}