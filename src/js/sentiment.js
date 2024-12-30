var path = require('path');
const axios = require('axios');//import axios for http requast
const dotenv = require('dotenv');//import dotenv for environment variables
dotenv.config();//losd environment variables
const apiKey = process.env.API_KEY;
//func to get sentiment analysis

    // get the api key 
    const url = 'https://api.meaningcloud.com/sentiment-2.1';//api url
    const getSentimentAnalysis = async (text) => {
    console.log("url sent to meanincloud  "+ text);
    try {//make the request to the api 
        const response = await axios.post(url, null, {

            params: {
                key: apiKey, //api Key
                txt: text,//text for analysis
                lang: 'en'//language
            }
        });
        console.log('Response', JSON.stringify(response.data, null, 2));
        return response.data;//return api response
    } catch (error) {
        console.error('error while calling Meaningcloud API:', error);//log error
        throw error;//throw error

    }
};
//export func
module.exports = { getSentimentAnalysis };