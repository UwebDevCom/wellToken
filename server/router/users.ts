import express from 'express';
import { connect } from '../controllers/users';




export default (router: express.Router) => {
    router.post('/auth/connect', connect);
    // router.post('/auth/register', register);
    // router.post('/auth/login', login);
}