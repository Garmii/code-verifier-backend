import express, { Request, Response } from "express";
import { ByeController } from "../controller/ByeController";
import { LogInfo } from "../utils/logger";


// Router from Express
let byeRouter = express.Router();

// http://localhost:port/api/hello?name=Miguel/
byeRouter.route('/').get(async (req:Request,res:Response) => {
        //Obtain a query param
        let name: any = req?.query?.name;
        LogInfo(`Query param -> ${name}`);
        // Controller instance
        const controller: ByeController = new ByeController();
        const response = await controller.getMessage(name);

        return res.send(response);
})

export default byeRouter;