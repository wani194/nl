//const express = require('express');
//const axios =require('axios');
//const app = express();
//const port = 3000;
//const API_KEY=''
const express = require('express');
const dotenv = require('dotenv');
const { getSentimentAnalysis } = require('./src/js/sentiment');

dotenv.config();
const app = express();
const PORT = 8081;

app.use(express.json()); // لمعالجة بيانات JSON من الطلبات

app.post('/sentiment', async (req, res) => {
  const { text } = req.body; // النص المُدخل

  try {
    const analysis = await getSentimentAnalysis(text);
    res.status(200).json(analysis); // إرسال نتيجة التحليل
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze sentiment.' }); // إرسال خطأ في حالة الفشل
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
