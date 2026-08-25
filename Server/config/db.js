import mongoose from "mongoose"


const ConnectDB = async()=>{
    try {

        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is Connected")
        
    } catch (error) {
        console.error("Error",error.message);
        throw error;
    }
}


export default ConnectDB;