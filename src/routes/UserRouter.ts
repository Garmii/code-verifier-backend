import express, { Request, Response } from "express";
import { UserController } from "../controller/UsersController";
import { LogInfo } from "../utils/logger";


// Router from Express
let userRouter = express.Router();

userRouter.route('/').get(async (req:Request,res:Response) => {
        let id: any = req?.query?.id;
        const controller: UserController = new UserController();
        let response: any = "";
        response = await controller.getUsers(id);                

        return res.send(response);
})

// userRouter.route('/:id').get(async (req:Request,res:Response) => {

// })

.delete(async (req:Request,res:Response) => {
        let id: any = req?.query?.id;
        const controller: UserController = new UserController();
        let response: any = "";
        response = await controller.deleteUserById(id);                

        return res.send(response);
})

export default userRouter;