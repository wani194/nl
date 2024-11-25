//log a message indicating that the nlp project has been initialized
console.log("NLP project initialized");


//import the form hundler functionality
import './formHandler';


//import the main styles for the project (scss file)
import '../styles/main.scss';

import { handleFormSubmit } from './formHandler';

//conect button with function
document.getElementById("evaluateButton").addEventListener("click",async () =>{
    console.log("button clicked!");
    const url =document.getElementById("ArticleUrl").value;
    if (!url){
     alert("please enter url to evaluate");
     return;
    }
    await handleFormSubmit({preventDefault:() =>{}});
});
