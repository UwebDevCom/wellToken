import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';


const MONGO_URL = 'mongodb+srv://uwebdev:WvAHMY1P35HEQEbC@users.heisxb7.mongodb.net/?retryWrites=true&w=majority';


const app = express();
app.use(cors({
    credentials: true
}));

app.use(bodyParser.json());


const server = http.createServer(app);


server.listen(8080, () => {
    console.log('server runnig on http://localhost:8080')
})

mongoose.Promise = Promise;

mongoose.connect(MONGO_URL);

mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());