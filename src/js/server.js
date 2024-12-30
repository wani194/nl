const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { getSentimentAnalysis } = require('./sentiment');
const cors = require('cors');


dotenv.config();

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

app.post('/sentiment', async (req, res) => {
    console.log("Sending request to analysis");
    const { text } = req.body;
    console.log("url is "+ text);
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Please provide valid text or URL.' });
    }

    try {
        const analysis = await getSentimentAnalysis(text);
        console.log("result is "+ analysis.score_tag);
        res.status(200).json({
            sentiment: analysis.score_tag || 'N/A',
            subjectivity: analysis.subjectivity || 'N/A',
            textSnippet: analysis.text || 'N/A',
        });
    } catch (error) {
        console.error('Error analyzing sentiment:', error);
        res.status(500).json({ error: `Failed to analyze sentiment: ${error.message}` });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
