import  express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Configuration of the .env file

dotenv.config();

// Create Express App

const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define first route of APP

app.get('/', (req: Request,res: Response) => {
    //Send Hello World
    res.send('root!')
});

app.get('/hello', (req: Request,res: Response) => {
    //Send Hello World
    res.status(200).json({
        "message": req.query.name === undefined ? "Hola anonimo" : `Hola ${req.query.name}`
    })
});

app.get('/bye', (req: Request, res: Response) => {
    res.status(200).json(
        {
            "message": "Goodbye, world"
        }
    )
});

// Execute APP and listen requests to PORT

app.listen(port, () => console.log(`Running HTTP server at http://localhost:${port}`))