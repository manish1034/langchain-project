import dotenv from 'dotenv';
import { ChatOpenAI } from "@langchain/openai";

dotenv.config();

// Validate environment variables
if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set in environment variables');
}

// Configure the ChatOpenAI model
export const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: "gpt-4o-mini",
    temperature: 0.7,
    streaming: true,
}); 