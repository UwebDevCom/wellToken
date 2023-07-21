import express from 'express';
import users from './users';
import blesses from './blesses';
import openai from './openai';

const router = express.Router();

users(router);
blesses(router);
openai(router);
export default (): express.Router => {
    return router;
}