import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
const dbUrl = process.env.DB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(`${dbUrl}/taskDB`)
        console.log("Db Connected Successfully !!!");
    } catch (error) {
        console.log("Db Connection Failed !!!!",error);
        process.exit(1)
    }
}

export default connectDB