import express from 'express';
import {index,addPost} from '../Controllers/Post.js'

const router = express.Router()

router.get("/",index)
router.post("/post",addPost);
export default router;