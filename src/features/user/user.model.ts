
import mongoose from "mongoose" 
import IUser from "./interfaces/User.interface"
const {Schema , model} = mongoose

const schema = new Schema<IUser>({
    name : String , 
    email : String , 
    phone : String , 
    wallet : String , 
    balance : {
        type : Number , 
        default : 0 
    } , 
    hasWallet : {
        type : Boolean , 
        default : false
    } , 
    address : {}
} , {timestamps : true})

const UserModel = model<IUser>("users" , schema) 

export default UserModel