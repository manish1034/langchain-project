import { ConversationChain } from "langchain/chains";
import { chatModel } from "../config/config.js";
import { createChatMemory } from "../memory/chatMemory.js";
import { PromptTemplate } from "@langchain/core/prompts";

const template = `The following is a friendly conversation between a human and an AI. 
The AI is helpful, creative, clever, and very friendly.

Current conversation:
{chat_history}
Human: {input}
AI:`;

export const createChatChain = () => {
    const prompt = PromptTemplate.fromTemplate(template);
    const memory = createChatMemory();

    return new ConversationChain({
        llm: chatModel,
        memory: memory,
        prompt: prompt,
    });
}; 