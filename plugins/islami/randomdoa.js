exports.run = {
	usage: ['randomdoa'],
	category: 'islami',
	async: async(m, {
	client
	}) => {
	   try {
	   const rdoa = await Func.fetchJson('https://api.akuari.my.id/islami/doa')
		const reply = `*${rdoa.result.title}*

• *Arab :* ${rdoa.result.arabic}
• *Latin :* ${rdoa.result.latin}
• *Terjemahan :* ${rdoa.result.translation}`
		client.reply(m.chat, reply, m)
	   } catch {
	   client.reply(m.chat, global.status.error, m)
	   }
	},
	error: false,
	limit: true
}