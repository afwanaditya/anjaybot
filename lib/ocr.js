const axios = require('axios'),
   FormData = require('form-data')
 
module.exports = async (str, lang = 'eng') => {
   return new Promise(async resolve => {
      try {
         const image = Buffer.isBuffer(str) ? str : str.startsWith('http') ? await (await axios.get(str, {
            responseType: 'arraybuffer'
         })).data : str
         let form = new FormData
         form.append('file', Buffer.from(image), 'image.jpg')
         form.append('lang', lang)
         form.append('format', 'txt')
         const json = await (await axios.post('https://onlineocr.org/ocr', form, {
            headers: {
               "Accept": "*/*",
               "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36",
               "Referer": "https://onlineocr.org/",
               "Referrer-Policy": "strict-origin-when-cross-origin",
               "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
               "sec-ch-ua-platform": "Android",
               "sec-fetch-dest": "empty",
               "sec-fetch-mode": "cors",
               "sec-fetch-site": "same-origin",
               ...form.getHeaders()
            }
         })).data
         if (json.status != 'success') return resolve({
            creator: global.creator,
            status: false,
            msg: 'Failed to generate text!'
         })
         resolve({
            creator: global.creator,
            status: true,
            data: {
               text: json.text
            }
         })
      } catch (e) {
         console.log(e)
         resolve({
            creator: global.creator,
            status: false,
            msg: e.message
         })
      }
   })
}