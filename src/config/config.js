import { ChatOllama } from "@langchain/community/chat_models/ollama";
// import { ChatOpenAI } from "@langchain/openai";

export const chatModel = new ChatOllama({
    model: "qwen2.5:0.5b",
    baseUrl: "http://localhost:11434",
});

// export const chatModel = new ChatOpenAI({
//     modelName: "gpt2",
//     temperature: 0.7,
//     streaming: true,
// }); 