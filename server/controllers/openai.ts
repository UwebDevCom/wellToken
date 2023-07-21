import express from 'express';
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generageBlessAi = async (req: express.Request, res: express.Response) => {
    console.log(req.body.prompt)
    try {
        
        const prompt = req.body.prompt;

        const response: any = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "user", content: prompt}
            ],
            temperature: 0,
            max_tokens: 1024,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          
        return res.status(200).json({
            prompt: response?.data?.choices[0]?.message?.content
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ err });
    }
}