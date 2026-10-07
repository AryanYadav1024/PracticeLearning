import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./db/index.js"



import { taskRouter } from './routes/taskRoutes.js'

dotenv.config()

// creating an express application object which has http server wrapped around it
const app = express()
const port = process.env.PORT

// first middleware setup in the function chain 
// Every request will pass through this first -> what this does is 
app.use(express.json())

// Task Routing
app.use('/api/tasks',taskRouter)


connectDB().
then(
    app.listen(port, ()=>{
        console.log("App Listening on PORT:",port);
    })
).catch((err) => {
    console.log("MongoDB connection FAILED",err);
})







