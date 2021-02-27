import express from 'express';
import dotenv from 'dotenv';
import http from 'http';

dotenv.config();

const app: express.Application = express();
const port: string | number = process.env.PORT ?? 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Hello'
    });
});

const server: http.Server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is starting: ${port}`);
});