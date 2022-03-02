import express ,{ Response , Request , Router  , NextFunction} from "express";
import UserController from "./controller" 
const {
    getUsers , 
    addUser
} = UserController
const userRouter  = Router() 

userRouter.get("/users" , getUsers)
userRouter.post("/users" , addUser)

export default userRouter

