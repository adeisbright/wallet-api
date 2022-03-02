import dotenv from "dotenv" 

dotenv.config() 

interface Config {
    port : string
    mongoUrl : string
}

const config : Config  = {
    port : process.env.PORT as string,
    mongoUrl : process.env.MONGO_URL as string
}

export default config