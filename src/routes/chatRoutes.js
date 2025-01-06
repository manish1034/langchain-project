import express from 'express';
import { createChatChain } from '../chains/chatChain.js';

const router = express.Router();
const chatChains = new Map();

router.post('/chat', async (req, res) => {
    try {
        const { message, sessionId } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get or create a chat chain for this session
        let chatChain = chatChains.get(sessionId);
        if (!chatChain) {
            chatChain = createChatChain();
            chatChains.set(sessionId, chatChain);
        }

        // Get the response from the chat chain
        const response = await chatChain.call({ input: message });

        res.json({ 
            response: response.response,
            sessionId: sessionId
        });

    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router; 