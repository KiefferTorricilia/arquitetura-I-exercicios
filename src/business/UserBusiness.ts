import { UserDatabase } from "../database/UserDatabase"
import { TUser } from "../types"


export class UserBusiness {

    public findUsers = async ():Promise<TUser[]> => {

        const user_database = new UserDatabase()
        const result = await user_database.findUsers()

        return result
    }

}