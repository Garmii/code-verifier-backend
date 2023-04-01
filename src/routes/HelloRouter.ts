import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";
import { BasicResponse } from "@/controller/types";


// Router from Express
let helloRouter = express.Router();

// http://localhost:port/api/hello?name=Miguel/
helloRouter.route('/').get(async (req:Request,res:Response) => {
        //Obtain a query param
        let name: any = req?.query?.name;
        LogInfo(`Query param -> ${name}`);
        // Controller instance
        const controller: HelloController = new HelloController();
        const response: BasicResponse = await controller.getMessage(name);

        return res.send(response);
})

export default helloRouter;