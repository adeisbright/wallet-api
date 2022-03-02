
import UserDataAccessObject   from "./user.dao"
import CRUD from "../../common/crud.interface";

class UserService implements CRUD {
    async create(resource: any){
        return await UserDataAccessObject.addUser(resource)
    }

    async list(){
        return UserDataAccessObject.getUsers()
    }
}

export default new UserService()