import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";

// PETICIONES CRUD

/**
 * Method to obtain all users from Collection "Users" in MongoDB
 */
export const getAllUsers = async (): Promise<any[] | undefined> => {
    try{

        let userModel = userEntity();
        return await userModel.find({})

    } catch (error) {
        LogError(`[ORM ERROR]: Getting All users: ${error}`);
    }
}

/**
 * Method to get 1 user by ID
 * @param id 
 */
export const getUserById = async (id: string): Promise<any | undefined> => {
    try{
        let userModel = userEntity();
        return await userModel.findById(id);
    }catch(error){
        LogError(`[ORM ERROR]: Getting user by id: ${error}`);
    }
}

export const deleteUserById = async (id:string): Promise<any | undefined> => {
    try {
        let userModel = userEntity();
        return await userModel.deleteOne({_id: id});
    } catch (error) {
        LogError("[/api/user] DELETE USER ERROR" + error);
    }
}


// TODO:
// - Get user by email
// - Delete user by Id
// - Create new user
// - Update user by ID