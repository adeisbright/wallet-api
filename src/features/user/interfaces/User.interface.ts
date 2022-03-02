import IAddress from "./Address.interface"

interface IUser {
    name : string 
    email: string 
    phone: string 
    wallet : string
    hasWallet : boolean
    balance : number ,
    address? : IAddress
}
export default IUser