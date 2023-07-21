import { createUser, getUserByWallet } from '../db/users';
import express, { response } from 'express';


export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { wallet } = req.body;

        if (!wallet) {
            return res.sendStatus(400);
        }

        const user = await getUserByWallet(wallet);

        if (!user) {
            return res.sendStatus(400);
        } 
        
        res.status(200).json(user).end();

    } catch(err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { wallet } = req.body;

        if(!wallet) {
            return res.sendStatus(400);
        }

        const exisitingUser = await getUserByWallet(wallet);

        if (exisitingUser) {
            return res.status(200).json(exisitingUser).end();
        }


        const user = await createUser({
            wallet
        });
        return res.status(200).json(user).end();
        
    } catch(err) {
        console.log(err);
        return res.sendStatus(400);
    }
}