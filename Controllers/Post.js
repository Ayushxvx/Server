import mongoose from "mongoose"
import Post from "../Models/Post.js";

async function index(req,res){
    try{
    const data = await Post.find();
    res.status(200).json({message:"Data fetched succesfully...",data})
}
catch(err){
    res.status(400).json({message:"Error in fetching data..."})
}
}


async function addPost(req,res){
    try{
        const title = req.body.title;
        const descripiton = req.body.description;
        const author = req.body.author;
        const post = new Post({title:title,description:descripiton,author:author})
        await post.save()
        res.status(201).json({ message: "Post created", post }); 
        console.log(`Data recieved : \nTitle = ${title}\nDescription = ${descripiton}\nAuthor = ${author}`)
    }
    catch{
        res.status(401).json({ message: "Post not created" }); 
    }
}

export {index,addPost};