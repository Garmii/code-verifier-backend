import { BasicResponse } from "../types";


export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IUserController {
    
    getUsers(id?: string): Promise<any>
    deleteUserById(id:string): Promise<any>
    createUser(user: any): Promise<any>
}
