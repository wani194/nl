//log a message indicating that the nlp project has been initialized
console.log("NLP project initialized");
import '../styles/main.scss';
import './formHandler';
document.getElementById("evaluateButton").addEventListener("click", async () => {
    console.log("button clicked!");
    const url = document.getElementById("ArticleUrl").value;
    if (!url) {
        alert("please enter url to evaluate");
        return;
    }
    await handleFormSubmit({ preventDefault: () => { } });
});