import IUser from "./interfaces/User.interface";
import UserModel from "./user.model";

class UserDataAccessObject {
    User = UserModel

    async getUsers(){
        return await this.User.find({})
    }

    async addUser(resource : IUser){
        return await this.User.create(resource)
    }
}

export default new UserDataAccessObject()