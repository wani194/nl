export const handleFormSubmit = async (e) => {
  e.preventDefault();
  const url = document.getElementById('ArticleUrl').value;
  if (!url) {
    alert('please enter url');
    return;
  }
  try {
    const response = await fetch('http://localhost:8081/sentiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text:url }),
    });
    const data = await response.json();
    document.getElementById('results').innerHTML = `
    <p>polarity: ${data.score_tag}</p>
    <p>Subjectivity : ${data.subjectivity || 'N/A'}</p>
    <P>Text: ${data.text}</p>
    `;
  }
  catch (error) {
    console.error('Error:', error);
    alert('an error occurred while processsing your request.');

  }
};




