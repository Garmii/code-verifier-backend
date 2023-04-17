/**
 * Root Router
 * Redirections to Routers
 */
import express, { Request,Response } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "../utils/logger";
import byeRouter from "./ByeRouter";
import userRouter from "./UserRouter";

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router();

// Active for requests to http://localhost:port/api

rootRouter.get('/', (req: Request,res: Response) => {
    LogInfo('Get: http://localhost:8000/api/')
    res.send('root!')
});

// Redirections to Routers & controllers

server.use('/', rootRouter);
server.use('/hello',helloRouter);
server.use('/goodbye', byeRouter);
server.use('/user',userRouter);

export default server;