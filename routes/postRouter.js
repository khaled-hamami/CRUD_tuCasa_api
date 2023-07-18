import express from "express"
import createPost from "../controllers/post/createPost.js"
import deletePost from "../controllers/post/deletePost.js"
import getPosts from "../controllers/post/getPosts.js"

const postRouter = express.Router()

postRouter.post("/fetchPosts", getPosts)
postRouter.post("/createPost", createPost)
postRouter.delete("/deletePost", deletePost)

export default postRouter
