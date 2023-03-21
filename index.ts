import  express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSuccess } from "./src/utils/logger";
import { error } from "console";

dotenv.config();
const port: string | number = process.env.PORT || 8000;

server.listen(port, () => LogSuccess(`Server running at http://localhost:${port}/api`));

server.on('error', (error) => {
LogError(`[SERVEER ERROR]: ${error}`);
})