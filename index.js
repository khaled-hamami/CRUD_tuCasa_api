import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js"
import postRouter from "./routes/postRouter.js"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"

const app = express()
const PORT = 3000

//the hidden url in the .env file
dotenv.config()
const URL = process.env.MONGO_URL_KEY

/*  MIDDLEWARES */
app.use(cors())
app.use(bodyParser.json({ limit: "10mb" }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))
app.use(express.json())

/*  ESTABLISHING CONNECTION */

app.get("/", (req, res) => {
  res.status(200).send("server is working")
})

/*  DATABASE  */

mongoose.connect(URL).then(async () => {
  console.log("Database connected")

  // MIDDLEWARES AS ROUTES
  app.use("/users", userRouter)
  app.use("/posts", postRouter)
})

/*  EXPRESS APP SERVER  */

app.listen(PORT, () =>
  console.log(`server is up and running on http://localhost:${PORT}`)
)
