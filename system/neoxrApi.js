const toanime = require('@arugaz/ai2d')
const fetch = require('node-fetch')
module.exports = class NeoxrApi {
   baseUrl = 'https://api.neoxr.my.id/api'
   apiKey = 'Iyadeh'

   constructor(apiKey) {
      this.apiKey = apiKey || ''
   }
   
   check = async () => {
      let json = await Func.fetchJson(this.baseUrl + '/check/' + this.apiKey)
      return json
   }
   
   podcast = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/podcast?url=' + url + '&apikey=' + this.apiKey)
      return json
   }
   
   fb = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/fb?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   ig = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/ig?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   igs = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/igstory?url=' + url + '&apikey=' + this.apiKey)
      return json
   }
   
   line = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/line?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   pin = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/pin?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   mediafire = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/mediafire?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   tiktok = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/tiktok?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   twitter = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/twitter?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   soundcloud = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/soundcloud?url=' + url + '&apikey=' + this.apiKey)
      return json
   }
   
   rexdl = async (str) => {
      let json = str.match('rexdl.com') ? await Func.fetchJson(this.baseUrl + '/rexdl-get?url=' + str + '&apikey=' + this.apiKey) : await Func.fetchJson(this.baseUrl + '/rexdl?q=' + encodeURIComponent(str) + '&apikey=' + this.apiKey)
      return json
   }
   
   pinterest = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/pinterest?q=' + query + '&apikey=' + this.apiKey)
      return json
   }
   
   soundcloud = async (str) => {
      let json = str.match('soundcloud.com') ? await Func.fetchJson(this.baseUrl + '/soundcloud?url=' + str + '&apikey=' + this.apiKey) : await Func.fetchJson(this.baseUrl + '/soundcloud-search?q=' + str + '&apikey=' + this.apiKey)
      return json
   }
   
   apk = async (query, no) => {
      if (query && no) {
         let json = await Func.fetchJson(this.baseUrl + '/apk?q=' + query + '&no=' + no + '&apikey=' + this.apiKey)
         return json
      } else if (query) {
         let json = await Func.fetchJson(this.baseUrl + '/apk?q=' + query + '&apikey=' + this.apiKey)
         return json
      }
   }

   film = async(query) => {
      let json = await Func.fetchJson('https://api.akuari.my.id/search/film?query=' + query) 
      return json
   }
   
   emojimix = async (emoticon) => {
   let json = await Func.fetchJson(this.baseUrl + '/emoji?q=' + encodeURI(emoticon) + '&apikey=' + this.apiKey)
      return json
   }
   
   wallpaper = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/wallpaper2?q=' + query + '&apikey=' + this.apiKey)
      return json
   }
   
   sticker = async (str) => {
      let json = str.match('getstickerpack.com') ? await Func.fetchJson(this.baseUrl + '/sticker-get?url=' + str + '&apikey=' + this.apiKey) : await Func.fetchJson(this.baseUrl + '/sticker?q=' + encodeURIComponent(str) + '&apikey=' + this.apiKey)
      return json
   }
   
   tm = (style, text) => {  
      return this.baseUrl + '/' + style + '?text=' + text + '&apikey=' + this.apiKey
   }
   
   ie = (style, image) => {
      return this.baseUrl + '/effect?style=' + style + '&image=' + image + '&apikey=' + this.apiKey
   }
   
   brainly = async (query, lang) => {
   let json = await Func.fetchJson(this.baseUrl + '/brainly?q=' + query + '&iso=' + lang + '&apikey=' + this.apiKey)
      return json
   }
   
   sholat = async (city) => {
      let json = await Func.fetchJson(this.baseUrl + '/sholat?q=' + city + '&apikey=' + this.apiKey)
      return json
   }
   
   kbbg = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/kbbg?q=' + query + '&apikey=' + this.apiKey)
      return json
   }
   
   chord = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/chord?q=' + query + '&apikey=' + this.apiKey)
      return json
   }
   
   lyric = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/lyric?q=' + query + '&apikey=' + this.apiKey)
      return json
   }
   
   igstalk = async (username) => {
      let json = await Func.fetchJson(this.baseUrl + '/igstalk?username=' + username + '&apikey=' + this.apiKey)
      return json
   }
   
   google = async (query, image = false) => {
      let json = await Func.fetchJson(this.baseUrl + '/' + (image ? 'goimg' : 'google') + '?q=' + query + '&apikey=' + this.apiKey)
      return json
   }

   asup = async () => {
      let json = await Func.fetchJson('https://api.akuari.my.id/asupan/ukhty')
      return json
   }

   zippy = async (url) => {
      let json = await Func.fetchJson('https://api.akuari.my.id/downloader/zippyShare?link=' +  url)
      return json
   }

   gempa = async () => {
      let json = await Func.fetchJson('https://api.akuari.my.id/info/gempa')
      return json
   }

   tt3 = async (url) => {
   let json = await Func.fetchJson('https://api.akuari.my.id/downloader/tiktok3?link=' + url)
   return json
   }
   toAnime = async url => {
   let json = await Func.fetchJson('https://qq.indocoder.dev/?url=' + url)
   return json
   }
   sidompul = async (text) => {
      let json = await fetch('https://sidompul.cloudaccess.host/cek.php?nomor=' + text)
      return json
   }
   diffusion = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/diffusion?q=' + query + '&apikey=' + this.apiKey)
      return json
   }

   spotify = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/spotify?url=' + url + '&apikey=' + this.apiKey)
      return json
   }
}