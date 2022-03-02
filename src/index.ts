import express from "express" 
import cors from "cors" 
import compression from "compression" 
import helmet from "helmet" 
import dotenv from "dotenv"
import config from "./config"

dotenv.config() 

const app : express.Application = express() 

app.use(express.json()) 
app.use(cors())
app.use(compression()) 
app.use(helmet())

app.get("/" , (req : express.Request , res : express.Response) => {
    res.status(200).json({
        message : "Getting Started with Payment API"
    })
})

app.listen(config.port, () => {
    console.log(`App is running on port ${config.port}`)
})



