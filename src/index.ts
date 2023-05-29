import express, { Request, Response} from 'express';
import cors from 'cors';
import { UserDatabase } from './database/UserDatabase';
import { UserController } from './controller/UserController';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

const userController = new UserController()


app.get("/users",userController.findUsers)

app.post("/users", userController.createUser)

app.put("/users/:id", userController.updateUser)

app.delete("/users/:id", userController.deleteUser)