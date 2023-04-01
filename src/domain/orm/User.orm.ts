import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "@/utils/logger";

// PETICIONES CRUD

/**
 * Method to obtain all users from Collection "Users" in MongoDB
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
    try{
        let userModel = userEntity();

        // Search all users

        return await userModel.find({isDelete: false})
    } catch (error) {
        LogError(`[ORM ERROR]: Getting All users: ${error}`);
    }
}


// TODO:
// - Get user by id
// - Get user by email
// - Delete user by Id
// - Create new user
// - Update user by ID