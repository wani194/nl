const express = require('express');
const dotenv = require('dotenv');
const { getSentimentAnalysis } = require('./src/js/sentiment');  // استيراد دالة التحليل

dotenv.config();  // تحميل المتغيرات البيئية

const app = express();
const PORT = 8081;

app.use(express.json()); // لمعالجة بيانات JSON من الطلبات

app.post('/sentiment', async (req, res) => {
  const { text } = req.body;  // الحصول على النص من الطلب

  try {
    const analysis = await getSentimentAnalysis(text);  // استدعاء دالة التحليل
    res.status(200).json(analysis);  // إرسال نتيجة التحليل
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze sentiment.' });  // إرسال خطأ في حالة الفشل
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
