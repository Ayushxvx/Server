import express, { urlencoded } from 'express';
import connectToDb from './DB.js';
import router from './Routes/Post.js';
import cors from 'cors';
const app = express();
app.use(cors({
        origin: 'http://localhost:5173', // Replace with the origin of your React application      
        credentials: true,
      }
));

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",router)

app.listen(3000,()=>{
    connectToDb();
    console.log("Server is running....")
    console.log(`http://localhost:3000`)
})