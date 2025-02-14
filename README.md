# AI Assistant: Sentence Paraphraser

## Project Overview

This project is a Chrome extension designed to paraphrase user-input sentences using the power of OpenAI's GPT models. The AI Assistant: Sentence Paraphraser leverages the OpenAI API to provide users with alternative ways to express their thoughts, helping to improve writing clarity and variety.

## Current Implementation

#### So far, the project has implemented the following:

1. Integration with OpenAI API to receive responses

2. Navigation through the API output format to extract and deliver the response



## How to Run the Project

1. Clone the repository:

`git clone https://github.com/vishveshpanchal/ai-assistant.git`


2. Navigate to the project directory:

`cd ai-assistant`


3. Create a `.env` file in the project's root directory and add your OpenAI API key:

`OPENAI_API_KEY=your_api_key_here`

4. Open a terminal in the project directory and install the necessary dependencies:

`npm i`

5. Start the development process by running:

`npm run start`

<!-- This is commented out. 

4. Load the extension in Chrome:
- Open Chrome and go to `chrome://extensions/`
- Enable "Developer mode" in the top right corner
- Click "Load unpacked" and select the project directory

5. The AI Assistant: Sentence Paraphraser is now ready to use in your Chrome browser.

-->

## Note

Ensure you keep your `OPENAI_API_KEY` secret and do not share it publicly.