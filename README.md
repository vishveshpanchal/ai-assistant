# AI Assistant Chrome Extension: Sentence Rephraser

## Project Overview

This project is a Chrome extension designed to paraphrase user-input sentences using the power of OpenAI's GPT models. The AI Assistant: Sentence Rephraser leverages the OpenAI API to provide users with alternative ways to express their thoughts, helping to improve writing clarity and variety.

### Technolgoies Used

<p align="center">
  <a href="https://go-skill-icons.vercel.app/">
    <img
      src="https://go-skill-icons.vercel.app/api/icons?i=chatgpt,nodejs,expressjs,javascript,html,css,npm,bash,chrome,git,github"
    />
  </a>
</p>

# AI Assistant Chrome Extension

This README provides instructions on how to set up and use the AI Assistant Chrome Extension, which helps rephrase sentences and correct grammatical errors.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/vishveshpanchal/ai-assistant.git
   ```

2. Navigate to the project folder:
   ```
   cd ai-assistant
   ```

   You'll find two directories: `backend` and `extension`.

## Setting up the Chrome Extension

1. Open Google Chrome and go to the Extensions page (chrome://extensions/).
2. Enable "Developer mode" in the top right corner.
3. Click "Load unpacked" and select the `extension` folder from the cloned repository.
4. Pin the extension for easy access.

## Configuring the Backend

1. Navigate to the `backend` directory.
2. Create a `.env` file with the following variables:
   ```
   OPENAI_API_KEY=your_openai_api_key
   CHROME_EXTENSION_ID_1=your_extension_idpa
   SERVER_PORT=3000
   ```
   - Get your OpenAI API key from the [OpenAI website](https://platform.openai.com/docs/api-reference/authentication).
   - Right-click on your extension icon in the Chrome toolbar.
        - Select "Manage Extension" from the context menu.
        - In the extension's details page that opens, look for the "ID" field. It will display a 32-character alphanumeric string, which is your extension's unique identifier (extension ID).
   - You can use port 3000 or any other available port for `SERVER_PORT`.

3. Open a terminal in the `backend` directory and run:
   ```
   npm i
   ```
   This will install all necessary Node.js dependencies.

4. Start the backend service:
   ```
   npm run start
   ```

## Using the Extension

1. Click on the extension icon in your Chrome browser.
2. Enter the sentence you want to rephrase or correct in the input box labeled "Enter your sentence".
3. Click the "Rephrase Sentence" button.
4. The extension will generate a grammatically correct and rephrased version of your input, which will be displayed in the input box labeled "Rephrased Sentence".

Enjoy using your AI Assistant Chrome Extension!

## Note

Ensure you keep your `OPENAI_API_KEY` secret and do not share it publicly.