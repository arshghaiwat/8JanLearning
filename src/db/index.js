import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDB = async () => {
    try{
        //mongoose returns an object

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("mogoDB conncetion error",error);
        //study exit(1)
        process.exit(1)
    }
}

export default connectDB