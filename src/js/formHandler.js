// Function to validate URL
const isValidUrl = (url) => {
  const regex = /^(https?:\/\/)?([\w\-\.]+)+(:\d+)?(\/([\w/_\-\.]*(\?\S+)?)?)?$/;
  return regex.test(url);
};


//handle form submission 
export const handleFormSubmit = async (e) => {
  e.preventDefault();//prevent the Default submattion behavior
  const url = document.getElementById('ArticleUrl').value;//get url input value

  //check if url is valid
  if (!isValidUrl(url)) {
    alert('Please Enter a valid URL');
    return;
  }
  // Show loading indicator
  const loadingElement = document.getElementById('loading');
  const resultsElement = document.getElementById('results');
  loadingElement.style.display = 'block';
  resultsElement.innerHTML = ''; // Clear previous results

  try {
    //make a post requast to the sentiment analysis endpoint
    const response = await fetch('http://localhost:8081/sentiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: url }),
    });

    //parse the response data and display it on the page
    const data = await response.json();
    document.getElementById('results').innerHTML = `
        <div class="result-card">
            <h2>Analysis Results</h2>
            <p><strong>Polarity:</strong> ${data.score_tag || 'N/A'}</p>
            <p><strong>Subjectivity:</strong> ${data.subjectivity || 'N/A'}</p>
            <p><strong>Text:</strong> ${data.text || 'N/A'}</p>
        </div>
    `;

  }
  catch (error) {
    //handle errors during the requast
    console.error('Error:', error);
    resultsElement.innerHTML = `
      <div class="error-card">
          <p>An error occurred while processing your request. Please try again later.</p>
      </div>
    `;
  } finally {
    // Hide loading indicator
    loadingElement.style.display = 'none';
  }
};

//make the function accessible globally
window.handleFormSubmit = handleFormSubmit;


