const { Configuration, OpenAIApi } = require('openai')    
 const configuration = new Configuration({                 
 apiKey: "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"                                      
 });               
 const openai = new OpenAIApi(configuration)

async function generateImage (text) {
return new Promise(async (resolve, reject) => {                                 
     const response = await openai.createImage({           
       model: "image-alpha-001",                           
       prompt: text,     
       n: 1,       
       size: "1024x1024",                                  
       responseformat: "url"                               
     });             
     resolve( { creator: '@dandisubhani_', status: true, response })           
     .catch (reject)                                                              
   })            
 };

module.exports = { generateImage }