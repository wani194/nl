const form = document.getElementById('ArticleForm');
form?.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit (event) {
  event.preventDefault();
   const url = document.getElementById('ArticleUrl').value;
   console.log("handleFormSubmit is called");
 
   const isValidUrl = (url) => {
    const regex = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator;
    return regex.test(url);
}; 


  if (!isValidUrl(url)) {
      alert('Please enter a valid URL.');
      return;
  }

  const loadingElement = document.getElementById('loading');
  const resultsElement = document.getElementById('results');
  loadingElement.style.display = 'block';
  resultsElement.innerHTML = '';

  try {
      const response = await fetch('/sentiment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: url }),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      resultsElement.innerHTML = `
          <div class="result-card">
              <h2>Analysis Results</h2>
              <p><strong>Polarity:</strong> ${data.sentiment}</p>
              <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
              <p><strong>Text:</strong> ${data.textSnippet}</p>
          </div>
      `;
  } catch (error) {
      console.error('Error:', error);
      resultsElement.innerHTML = `
          <div class="error-card">
              <p>An error occurred: ${error.message}</p>
          </div>
      `;
  } finally {
      loadingElement.style.display = 'none';
  }
};

export {handleFormSubmit}
// window.handleFormSubmit = handleFormSubmit;
