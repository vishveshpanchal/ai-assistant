require('dotenv').config()
const express= require('express');
const OpenAI = require('openai');
const cors = require('cors');

const app = express();
const SERVER_PORT = 3000;
const CHROME_EXTENSION_ID_1 = process.env.CHROME_EXTENSION_ID_1
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

app.use(express.json());


// CORS for Chrome extension's origin
app.use((req, res, next) => {
    const allowedOrigins = [
        `chrome-extension://${CHROME_EXTENSION_ID_1}`, // extension ID
    ];

    const origin = req.headers.origin; // Get the origin from the request headers
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin); // Allow the specific origin
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
    }

    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is up and running' });
});

// Rephrase endpoint
app.post('/rephrase', async (req, res) => {
    // console.log(req);
    const { sentence, origin } = req.body;
    // console.log('Request from origin:', origin);

    // console.log("post method " + sentence);
    const rephrasedSentence = await rephraseSentenceByAI(sentence);
    res.json({ rephrasedSentence });
});



app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});

async function rephraseSentenceByAI(sentence) {
    // console.log("rephraseSentenceByAI method " + sentence);
    var rephrasedSentence = "";
    const stream = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: `Please correct any grammatical errors in the following text and rewrite it in a formal, professional tone. \n Sentence: \n ${sentence}` }],
        store: true,
        stream: true,
    });
    for await (const chunk of stream) {
        // process.stdout.write(chunk.choices[0]?.delta?.content || "");
        rephrasedSentence += (chunk.choices[0]?.delta?.content || "");
    }
    return rephrasedSentence;
}

// curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
//      "model": "gpt-4o",
//      "messages": [{"role": "user", "content": "Tell me the best city in California"}],
//      "temperature": 0.7
//    }'