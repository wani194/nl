# NLP Project
## Description
A web tool for analyzing sentiment and subjectivity of articles and blogs using Natural Language Processing (NLP). It classifies content as subjective or objective and determines the tone (positive, neutral, negative). 


---

## Features
- Analyze articles for sentiment polarity (positive, neutral, or negative).
- Classify articles as subjective or objective.
- Display results including polarity, subjectivity, and a snippet of the analyzed text.
- Validate URLs with user-friendly error messages.
- Works offline with Service Worker integration.
- Simple, responsive user interface.

---

## Technologies Used
- **Node.js**: Backend runtime.
- **Express**: Web framework for routing and server setup.
- **MeaningCloud API**: NLP analysis of article content.
- **Webpack**: Tool for bundling, optimizing, and managing assets.
- **SCSS**: Modular and efficient styling approach.
- **Jest**: JavaScript testing framework for unit tests.

---

## Setup and Installation

### Prerequisites
- Ensure you have the following installed:
  - Node.js (version 14 or later).
  - npm (Node Package Manager).

### Steps to Install
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/nlp-project.git
    ```

2. Navigate to the project directory:
    ```bash
    cd nlp-project
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

---

## Usage

### Running the Development Server
1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and navigate to:
    ```
    http://localhost:8081
    ```

### Running the Production Build
1. Build the project for production:
    ```bash
    npm run build
    ```

2. Start the production server:
    ```bash
    npm run start
    ```

3. Open your browser and go to:
    ```
    http://localhost:8081
    ```

---

## Testing
To ensure all functionalities are working as expected, run the test cases:
```bash
npm run test
