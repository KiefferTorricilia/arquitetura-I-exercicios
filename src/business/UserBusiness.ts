import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { TUser } from "../types"


export class UserBusiness {

    public findUsers = async ():Promise<TUser[]> => {

        const user_database = new UserDatabase()
        const result = await user_database.findUsers()

        return result
    }

    public findUserById = async (id:string):Promise<TUser> => {

        const userDatabase = new UserDatabase()
        const result = await userDatabase.findUserById(id)
        return result
    }

    public createUser = async (id:string, name:string, age:number):Promise<void> => {

        const userDatabase = new UserDatabase()

        const newUser = new User(
            id,
            name,
            age
        );
        

        const newUserTUser: TUser = {
            id: newUser.getId(),
            name: newUser.getName(),
            age: newUser.getAge()
        }

        await userDatabase.insertUser(newUserTUser)
    }

}