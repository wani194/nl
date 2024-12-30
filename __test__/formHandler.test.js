 /**
 * @jest-environment jsdom
 */
import { handleFormSubmit } from '../src/js/formHandler';

test('handleFormSubmit should return error occurred: fetch is not defined', async () => {
    // محاكاة HTML للصفحة
    document.body.innerHTML = `
        <section>
            <form id="ArticleForm"> 
                <label for="ArticleUrl" class="Visually-hidden">Enter Article URL </label>
                <input type="url" id="ArticleUrl" placeholder=" Enter Article URL" required
                    aria-label="Enter Article Url" value="https://example.com" />
                <button type="submit" id="evaluateButton">Evaluate</button>
            </form>
        </section>
        <section id="loading" style="display: none;">Loading...</section>
        <section id="results" aria-live="polite"></section>
    `;
    const form = document.getElementById('ArticleForm');
    console.log('value :', document.getElementById('ArticleUrl').value );
    require('../src/js/formHandler');
    // إنشاء حدث وهمي للاختبار


    form.addEventListener('submit', handleFormSubmit);


    const evaluateButton = document.getElementById('evaluateButton');
    evaluateButton.click();

    const result = document.getElementById('results');
    const expected = `
          <div class="error-card">
              <p>An error occurred: fetch is not defined</p>
          </div>
      `;
    // تحقق من عرض مؤشر التحميل
    expect(result.innerHTML).toBe(expected);
});
