type Coordinates =  {
    points : number[] ; 
    type : string ; 
}

interface IAddress {
    country : string 
    state? : string
    street? : string 
    zipCode? : string 
    coordinates? : Coordinates
} ; 

export default IAddress