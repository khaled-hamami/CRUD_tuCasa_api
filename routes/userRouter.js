import express from "express"
import createUser from "../controllers/user/createUser.js"
import login from "../controllers/user/login.js"
import userPosts from "../controllers/user/userPosts.js"
import getContactInfo from "../controllers/post/getContactInfo.js"

const userRouter = express.Router()

userRouter.post("/auth/register", createUser)
userRouter.post("/auth/login", login)
userRouter.post("/userPosts", userPosts)
userRouter.post("/contactinfo", getContactInfo)

export default userRouter
