import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function connectToDb(){
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("Connected to DB...")
    })
    .catch((err)=>{
        console.log("Error :"+err)
    })
}

export default connectToDb;