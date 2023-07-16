import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
  {
    delegation: { type: String, required: true },
    preciseLocation: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    roomsNumber: { type: Number, required: true },
    uploadedImages: {
      type: [String],
      default: [],
      required: true,
    },
    userId: { type: String, required: true },
  },
  { timestamps: true }
)

const postModel = mongoose.models.posts || mongoose.model("Posts", postSchema)
export default postModel
