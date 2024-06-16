import mongoose from "mongoose";

export const dbConnect = async () => {
    try{
    await mongoose.connect(process.env.MONGO_URI!,{
        dbName:"joinode",
    });
    console.log("Database Connected");
    }catch(error){
        console.log("Error connecting to Database")
    }
};