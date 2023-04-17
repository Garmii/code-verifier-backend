import { Delete, Get, Post, Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM - Users 
import { getAllUsers, getUserById, deleteUserById } from "../domain/orm/User.orm";

@Route("/api/user")
@Tags("usersController")
export class UserController implements IUserController{
  /**
   * Endpoint to retrieve all Users in the collection "Users"
  */
 @Get("/")
  public async getUsers(@Query()id?: string): Promise<any> {

    if(id) {
      LogSuccess(`[/api/users] Get user by id ${id}`)
        
            return await getUserById(id);
    }else{
      LogSuccess("[/api/user] Get All Users request")

      return await getAllUsers();
    }
  }

  /**
   * Endpoint to delete a user by ID
  */
  @Delete("/")
  public async deleteUserById(@Query()id: string): Promise<any> {
    let response: any = "";
    await deleteUserById(id).then((r) => {
      response = {
        message: `User with id ${id} deleted successfully`
      }
    })
    return response;
  }

  @Post("/")
  public async createUser(user:any): Promise<any> {
    let response: any = "";    
  }
}
