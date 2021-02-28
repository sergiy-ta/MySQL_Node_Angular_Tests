import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';

import api from './api/api';

dotenv.config();

const app: express.Application = express();
const port: string | number = process.env.PORT ?? 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Hello'
    });
});

const server: http.Server = http.createServer(app);
server.listen(port, () => {
    /* tslint:disable */
    console.log(`Server is starting: ${port}`);
    /* tslint:enable */
});