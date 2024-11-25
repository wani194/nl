const axios = require('axios');//import axios for http requast
const dotenv = require('dotenv');//import dotenv for environment variables
dotenv.config();//losd environment variables

//func to get sentiment analysis
const  getSentimentAnalysis = async(text) => {
    const apiKey = process.env.API_KEY;// get the api key 
    const url = 'https://api.meaningcloud.com/sentiment-2.1';//api url
   
   
    try {//make the request to the api 
        const response = await axios.post(url, null, {
            params: {
                key: apiKey, //api Key
                txt: text,//text for analysis
                lang: 'en'//language
            }
        });
        return response.data;//return api response
    } catch (error) {
        console.error('error while calling Meaningcloud API:', error);//log error
        throw error;//throw error
    
}
};
//export func
module.exports = { getSentimentAnalysis };



