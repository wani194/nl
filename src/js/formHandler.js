export const handleFormSubmit = async (e) => {
  e.preventDefault();
  const url = document.getElementById('ArticleUrl').value;
  if (!url) {
    alert('please enter url');
    return;
  }
  try {
    const response = await fetch('http://localhost:8081/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    document.getElementById('results').innerHTML = `
    <p>polarity: ${data.polarity}</p>
    <p>Subjectivity : ${data.subjectivity}</p>
    <P>Text: ${data.text}</p>
    `;
  }
  catch (error) {
    console.error('Error:', error);
    alert('an error occurred while processsing your request.');

  }
};




