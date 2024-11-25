const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const { getSentimentAnalysis } = require('./sentiment');//important the statment analysis func 

dotenv.config();//loading environment virable from env file 

const app = express();//CREAT AN EXPRESS APP
const PORT = 8888;//definig the port that the server will run in it 

app.use(express.json());//setting up the app to handle json data in incoming requests

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/index.html'));
  });

app.post('/sentiment', async (req, res) => {
    const { text } = req.body;//get text from the incoming requast body
    try {
        //calling the sentiment analysis function with the provided text 
        const analysis = await getSentimentAnalysis(text);
        res.status(200).json(analysis);//sending analysis result as a response
    } catch (error) {
        //sending an error responseif something go wrong
        console.error('Error analyzing sentiment:', error);
        res.status(500).json({ error: 'failed to analyze sentiment.' });
    }
});
//starting the server and listening for requast on the specified port
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
