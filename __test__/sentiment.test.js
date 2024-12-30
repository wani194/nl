
const { getSentimentAnalysis } = require('../src/js/sentiment');



describe("getSentimentAnalysis", () => {
    test('The response of analyzing "https://www.bbc.com/news/articles/c0j1wwypygxo" without API key shoud have status code 200', async () => {
        const response = await getSentimentAnalysis("https://www.bbc.com/news/articles/c0j1wwypygxo");
      expect(response.status.code).toBe('200');
    });
});