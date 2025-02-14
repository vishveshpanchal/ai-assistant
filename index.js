// import OpenAI from "openai";
require('dotenv').config()
var OpenAI = require('openai');
let OPENAI_API_KEY = process.env.OPENAI_API_KEY;
// const openai = new OpenAI();
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });


async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: "Tell me the richest city in Massachusetts, United States." }],
        store: true,
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

main();



// curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
//      "model": "gpt-4o",
//      "messages": [{"role": "user", "content": "Tell me the best city in California"}],
//      "temperature": 0.7
//    }'