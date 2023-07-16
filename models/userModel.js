import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, min: 2, max: 20 },
    lastName: { type: String, required: true, min: 2, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 30 },
    password: { type: String, required: true, min: 6, max: 30 },
    PostsIds: { type: [String], default: [] },
  },
  { timestamps: true }
)

const userModel = mongoose.models.users || mongoose.model("Users", userSchema)
export default userModel

