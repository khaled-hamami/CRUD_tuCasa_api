import express from "express"
import createPost from "../controllers/createPost.js"
import deletePost from "../controllers/deletePost.js"
import getPosts from "../controllers/getPosts.js"

const postRouter = express.Router()

postRouter.post("/fetchPosts", getPosts)
postRouter.post("/createPost",createPost)
postRouter.delete("/deletePost",deletePost)

export default postRouter
