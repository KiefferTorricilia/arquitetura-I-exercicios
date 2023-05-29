import { User } from "../models/User";
import { TUser } from "../types";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    public static TABLE_NAME = "users"

    public async findUsers():Promise<TUser[]> {

        const result = BaseDatabase.connection(UserDatabase.TABLE_NAME)
        return result
    }

    public async insertUser (newUser:TUser ):Promise<void> {
        await BaseDatabase.connection(UserDatabase.TABLE_NAME).insert(newUser)
    }

    public async findUserById (id:string) {

      const [result] = await BaseDatabase.connection(UserDatabase.TABLE_NAME).where({id: id})

      return result
    }

    public async updateUser (user: User, id:string) {
        await BaseDatabase.connection(UserDatabase.TABLE_NAME).update(user).where({id: id})
    }

    public async deleteUser (id: string) {
        await BaseDatabase.connection(UserDatabase.TABLE_NAME).delete().where({id: id})
    }
}