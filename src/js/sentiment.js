const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();


const  getSentimentAnalysis = async(text) => {
    const apiKey = process.env.API_KEY;
    const url = 'https://api.meaningcloud.com/sentiment-2.1';
   
   
    try {
        const response = await axios.post(url, null, {
            params: {
                key: apiKey,
                txt: text,
                lang: 'en'
            }
        });
        return response.data;
    } catch (error) {
        console.error('error while calling Meaningcloud API:', error);
        throw error;
    
}
};
module.exports = { getSentimentAnalysis };


