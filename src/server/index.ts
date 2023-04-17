import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import cors from 'cors'; 
import helmet from 'helmet';
import routes from '../routes'
import swaggerUi from 'swagger-ui-express';
import mongoose from "mongoose";
import { LogError, LogSuccess } from "../utils/logger";
import { error } from "console";
// TODO HTTPS 


// Configuration of the .env file

dotenv.config();

// Create Express server

const server: Express = express();

// * Swagger config and route
server.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined,{
        swaggerOptions: {
            url: "/swagger.json",
            explorer: true
        }
    })
)

// Define Server to use "/api" and use rootRouter from 'index.ts in routes

server.use(
    '/api',
    routes
    );

    //Static server
    server.use(express.static('public'));

    // TODO Mongoose
let mongoUri = process.env.MONGO_URI || "a";
let collection = process.env.COLLECTION;
    mongoose.connect(mongoUri+collection).then(() => {
        LogSuccess("CONECTADO A MONGO");
    }).catch((error) => {
        LogError("ERROR AL CONECTAR A MONGO");
    })

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
