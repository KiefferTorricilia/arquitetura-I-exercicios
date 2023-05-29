import { UserDatabase } from "../database/UserDatabase"
import { Request, Response } from "express"
import { TUser } from "../types"
import { User } from "../models/User"
import { UserBusiness } from "../business/UserBusiness"


export class UserController {


    public findUsers =  async (req: Request, res: Response) => {
        try {

            const userBusiness = new UserBusiness()
            const result = await userBusiness.findUsers()
      
          
      
          res.status(200).send(result)
        } catch (error) {
          console.log(error)
      
          if (req.statusCode === 200) {
              res.status(500)
          }
      
          if (error instanceof Error) {
              res.send(error.message)
          } else {
              res.send("Erro inesperado")
          }
        }
      }

    public createUser = async (req: Request, res: Response) => {
        try {
            const { id, name, age} = req.body

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

            res.status(200).send("Usuário criado com sucesso")
        } catch (error) {
            console.log(error)
      
            if (req.statusCode === 200) {
                res.status(500)
            }
        
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public updateUser = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id
            const { name, age} = req.body

            const userDatabase = new UserDatabase()
            const userExist = await userDatabase.findUserById(id)

            if(!userExist) {
                res.status(404)
                throw new Error("id não encontrado.")
            }

            const user = new User(
                userExist.id,
                userExist.name,
                userExist.age
            )

            if(name){
                user.setName(name)
            }
            if(age){
                user.setAge(age)
            }

            await userDatabase.updateUser(user, id)

        res.status(200).send("Usuário alterado com sucesso.")
        } catch (error) {
            console.log(error)
      
            if (req.statusCode === 200) {
                res.status(500)
            }
        
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public deleteUser = async (req:Request, res: Response) => {
        try {

            const id:string = req.params.id;

            const userDatabase = new UserDatabase()
            await userDatabase.deleteUser(id)


            res.status(200).send("Usuário deletado com sucesso.")
        } catch (error) {
            console.log(error)
      
            if (req.statusCode === 200) {
                res.status(500)
            }
        
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}