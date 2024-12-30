import '../styles/scss/footer.scss'
import '../styles/scss/form.scss'
import '../styles/scss/header.scss'
import '../styles/scss/main.scss'



 // Log a message indicating that the NLP project has been initialized
console.log("NLP project initialized");

import { handleFormSubmit } from './formHandler';
import { checkForName } from './formHandler';
import { analyzeSentiment } from './sentiment';


// Service Worker Registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registered:', reg.scope))
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}
