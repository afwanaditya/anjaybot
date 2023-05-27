const { Configuration, OpenAIApi } = require('openai')
exports.run = {
   usage: ['ai'],
   hidden: ['brainly'],
   use: 'question',
   category: 'searching',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'how to create api'), m)
         client.sendReact(m.chat, '🕒', m.key)
         const configuration = new Configuration({
            apiKey: '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'
         })
         const openai = new OpenAIApi(configuration)
         const json = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0.7,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
         })
         if (json.statusText != 'OK' || json.data.choices.length == 0) return client.reply(m.chat, global.status.fail, m)
         client.reply(m.chat, json.data.choices[0].text.trim(), m)
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   //premium: true,
   restrict: true
}