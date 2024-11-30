//handle form submission 
export const handleFormSubmit = async (e) => {
  e.preventDefault();//prevent the Default submattion behavior
  const url = document.getElementById('ArticleUrl').value;//get url input value
  
  //if no url is enterd show an alert
  if (!url) {
    alert('please enter url');
    return;
  }
  try {
    //make a post requast to the sentiment analysis endpoint
    const response = await fetch('http://localhost:8888/sentiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text:url }),
    });

    //parse the response data and display it on the page
    const data = await response.json();
     document.getElementById('results').innerHTML = `
        <p>polarity: ${data.score_tag || 'N/A'}</p>
         <p>Subjectivity : ${data.subjectivity || 'N/A'}</p>
         <p>Text: ${data.text || 'N/A'}</p>
           `;

  }
  catch (error) {
    //handle errors during the requast
    console.error('Error:', error);
    alert('an error occurred while processsing your request.');

  }
};

//make the function accessible globally
window.handleFormSubmit = handleFormSubmit;


