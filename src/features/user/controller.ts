import userServices from "./user.services";
import { Request , Response} from "express";

class UserController {
    async getUsers(req : Request , res : Response){
        try {
            const result = await userServices.list()
            res.status(200).json({
                message : "Testing" , 
                data : [] , 
                users : result
            })
        }catch(error){
            console.error(error) 
            res.status(500).json(error)
        }
    }

    async addUser(req : Request , res : Response){
        try{
            let user= await userServices.create(req.body)
            res.status(200).json({
                data : user
            })

        }catch(error){
            console.log(error)
            res.status(500).json({
                message : "Error happen"
            })
        }
    }
}

export default new UserController() 