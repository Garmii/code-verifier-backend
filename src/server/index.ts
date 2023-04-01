import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import cors from 'cors'; 
import helmet from 'helmet';
import routes from '../routes'
// TODO HTTPS 


// Configuration of the .env file

dotenv.config();

// Create Express server

const server: Express = express();

// Define Server to use "/api" and use rootRouter from 'index.ts in routes

server.use(
    '/api',
    routes
    );

    //Static server
    server.use(express.static('public'));

    // TODO Mongoose

server.use(helmet());
server.use(cors());

// Content type config:
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json({limit: '50mb'}));

// Root to api 
server.get('/', (req:Request,res:Response) => {
    res.redirect('/api');
});

export default server;
