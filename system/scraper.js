const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const FormData = require('form-data')
const BodyForm = require('form-data')
const fs = require('fs')
const drakorasia = new (require('../lib/drakor2'))
const y2mate = require('../lib/y2matev2')
const { fromBuffer } = require('file-type')
global.creator = `@dandisubhani_`

module.exports = class Scraper {
   /* Chat AI
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   chatAI = (bid, key, text) => {
      return new Promise(async (resolve) => {
         try {
            let json = await (await axios.get('http://api.brainshop.ai/get?bid=' + bid + '&key=' + key + '&uid=neoxr&msg=' + encodeURI(text))).data
            if (typeof json.cnt == 'undefined') return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               cretor: global.creator,
               status: true,
               msg: json.cnt
            })
         } catch (e) {
            console.log(e)
            return resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
      

    
    drakor = async (str) => {
      let json = str.match('173.212.240.190') ? await drakorasia.detail(str) : await drakorasia.search(str)
      return json
   }
    
    async youtube(url, type = 'combine') {
      if (type == 'combine') {
         var json = await y2mate.yt(url)
      } else if (type == 'audio') {
         var json = await y2mate.yta(url)
      } else if (type == 'video') {
         var json = await y2mate.ytv(url)
      }
      return json
   }
    
    urban(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.urbandictionary.com/define.php?term=' + q)).data
            let $ = cheerio.load(html)
            let content = [],
               author = []
            $('div.meaning').each((i, e) => content.push($(e).text()))
            $('div.contributor').each((i, e) => author.push($(e).text()))
            if (content.lenght == 0 || author.lengh == 0) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  content: content[0].trim(),
                  author: author[0].trim()
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
    
   whatanime(url) {
      return new Promise(async (resolve) => {
         try {
            let json = await (await axios.get('https://api.trace.moe/search?url=' + encodeURIComponent(url))).data
            if (json.error) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: json.result[0]
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   /* URL Shortener
    * @param {String} url
    */
   shorten = (url) => {
      return new Promise(async (resolve) => {
         try {
            let params = new URLSearchParams()
            params.append('url', url)
            let json = await (await fetch('https://s.nxr.my.id/api', {
               method: 'POST',
               body: params
            })).json()
            if (json.error) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  url: 'https://s.nxr.my.id/r/' + json.data.code
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   /* Image Uploader (telegra.ph)
    * @param {Buffer} buffer
    */
   uploadImage = async (buffer) => {
      let {
         ext
      } = await fromBuffer(buffer)
      let form = new FormData
      form.append('file', buffer, 'tmp.' + ext)
      let res = await fetch('https://telegra.ph/upload', {
         method: 'POST',
         body: form
      })
      let img = await res.json()
      if (img.error) throw img.error
      return 'https://telegra.ph' + img[0].src
   }
}
