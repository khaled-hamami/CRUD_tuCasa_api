import express from "express"
import createUser from "../controllers/createUser.js"
import login from "../controllers/login.js"
import userPosts from "../controllers/userPosts.js"

const userRouter = express.Router()

userRouter.post("/auth/register", createUser)
userRouter.post("/auth/login", login)
userRouter.post("/userPosts", userPosts)


export default userRouter
