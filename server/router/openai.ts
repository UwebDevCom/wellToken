
import express from 'express';
import { generageBlessAi } from '../controllers/openai';

export default (router: express.Router) => {
    router.post('/generate-bless', generageBlessAi);
}