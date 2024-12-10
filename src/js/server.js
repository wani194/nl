const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { getSentimentAnalysis } = require('./sentiment');//important the statment analysis func 
const cors = require('cors');


dotenv.config();//loading environment virable from env file 

const app = express();//CREAT AN EXPRESS APP
const PORT = 8081;//definig the port that the server will run in it 
app.use(cors());//f 
app.use(express.json());//setting up the app to handle json data in incoming requests

// Utility function to validate if the text is a valid URL (if needed)
const isValidUrl = (url) => {
    const regex = /^(https?:\/\/)?([\w\-\.]+)+(:\d+)?(\/([\w/_\-\.]*(\?\S+)?)?)?$/;
    return regex.test(url);
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/index.html'));
});

app.post('/sentiment', async (req, res) => {
    const { text } = req.body;//get text from the incoming requast body

    // Ensure the text is provided and is a valid string (optional validation for URL if needed)
    if (!text || typeof text !== 'string') {
        return res.status(400).json({
            error: 'Invalid input. Please provide a valid text string or URL.' // تحسين الرسالة
        });
    }


    // If you need to check if it's a URL (optional):
    if (!isValidUrl(text)) {
        return res.status(400).json({ error: 'Please provide a valid URL.' });
    }

    try {
        //calling the sentiment analysis function with the provided text 
        const analysis = await getSentimentAnalysis(text);
        res.status(200).json({
            sentiment: analysis.score_tag || 'N/A',
            subjectivity: analysis.subjectivity || 'N/A',
            textSnippet: analysis.text || 'N/A',
        });//sending analysis result as a response
    } catch (error) {
        //sending an error responseif something go wrong
        console.error('Error analyzing sentiment:', error);
        res.status(500).json({ error: `Failed to analyze sentiment: ${error.message}` });
    }
});
//starting the server and listening for requast on the specified port
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
