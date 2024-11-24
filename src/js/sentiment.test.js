
const { text } = require('body-parser');
const { getSentimentAnalysis } = require('../sentiment');

//mocking sentiment analysisfo different text input
jest.mock('../sentiment', () =>({
    getSentimentAnalysis: jest.fn((text) => {
        if (text.includes('love')) return Promise.resolve({score_tag: 'p+'});
        if (text.includes('hate')) return Promise.resolve({score_tag: 'N'});
        return Promise.resolve({score_tag: 'NEU'});
    }),
}));

//test for positive sentiment

test('should return sentiment analysis for input text and classify it as positive ', async () => {
    const text = 'i love programming!';
    const result = await getSentimentAnalysis(text);
    expect(result).toHaveProperty('score_tag');
    expect(result.score_tag).toBe('p+');
});


//test for negative sentiment
test('should return sentiment analysis for input text and classify it as negative ', async () => {
    const text = 'i hate buges!';
    const result = await getSentimentAnalysis(text);
    expect(result).toHaveProperty('score_tag');
    expect(result.score_tag).toBe('N');
});

//test for neutral sentiment
test('should return sentiment analysis for input text and classify it as Neutral ', async () => {
    const text = 'this is normal sentence ';
    const result = await getSentimentAnalysis(text);
    expect(result).toHaveProperty('score_tag');
    expect(result.score_tag).toBe('NEU');
});




