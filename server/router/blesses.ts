import express from 'express';
import { bless, blesses } from '../controllers/blesses';

export default (router: express.Router) => {
    router.post('/blesses/create-bless', bless);
    router.get('/blesses/:wallet', blesses);
}