
import express from 'express';
import { createBless, getBlessesByWallet } from '../db/blesses';

export const bless = async (req: express.Request, res: express.Response) => {
    try {
        const { wallet, content, createdAt } = req.body;
        console.log(wallet, content, createdAt);
        if (!wallet) {
            return res.sendStatus(400);
        }
        const bless = await createBless({
            wallet,
            bless: {
                content,
                createdAt
            }
        });

        return res.status(200).json(bless).end();
        
    } catch(err) {

    }
}

export const blesses = async (req: express.Request, res: express.Response) => {
    try {
     const { wallet } = req.params;
 
     if (!wallet) {
         return res.sendStatus(400);
     }
     const blesses = await getBlessesByWallet(wallet);

     return res.status(200).json(blesses).end();
 
    } catch (err) {
     console.log(err);
     return res.sendStatus(400);
     }
 }