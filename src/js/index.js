import '../styles/scss/footer.scss';
import '../styles/scss/form.scss';
import '../styles/scss/header.scss';
import '../styles/scss/main.scss';

//log a message indicating that the nlp project has been initialized
console.log("NLP project initialized");

import './formHandler';
import './sentiment';
document.getElementById("evaluateButton").addEventListener("click", async () => {
    console.log("button clicked!");
    const url = document.getElementById("ArticleUrl").value;
    if (!url) {
        alert("please enter url to evaluate");
        return;
    }
    await handleFormSubmit({ preventDefault: () => { } });
});
