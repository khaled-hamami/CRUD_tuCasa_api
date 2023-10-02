import postModel from "../../models/postModel.js"
import userModel from "../../models/userModel.js"

const createPost = async (req, res) => {
  try {
    const newPost = new postModel({
      delegation: req.body.delegation,
      preciseLocation: req.body.preciseLocation,
      description: req.body.description,
      price: req.body.price,
      roomsNumber: req.body.roomsNumber,
      uploadedImages: req.body.uploadedImages,
      userId: req.body.userId,
    })

    //to push the post id into the user posts array
    await userModel.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { PostsIds: newPost._id } },
      { new: true }
    )

    //save to the database the new post
    await newPost.save()

    //must hash the password
    res.status(201).json({
      status: "Publication créée avec succès",
      payload: { delegation: newPost.delegation, price: newPost.price },
    })
  } catch (err) {
    res
      .status(500)
      .json({
        status: "Échec de la création de la publication",
        payload: err.message,
      })
  }
}
export default createPost
