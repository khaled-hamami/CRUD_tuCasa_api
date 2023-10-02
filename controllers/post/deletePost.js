import postModel from "../../models/postModel.js"
import userModel from "../../models/userModel.js"

const deletePost = async (req, res) => {
  try {
    const { postId } = req.body

    //to find the post but dont delete until get the user id
    //to delete the post from its posts

    const post = await postModel.findOne({ _id: postId })
    if (!post) throw new Error("Impossible de trouver la publication")
    const { userId } = post
    if (!userId) throw new Error("Une erreur s'est produite !")
    await postModel.findOneAndDelete({ _id: postId })
    await userModel.findOneAndUpdate(
      { _id: userId },
      { $pull: { PostsIds: postId } }
    )
    res.status(200).json({ message: "Publication supprimée avec succès" })
  } catch (err) {
    res.status(401).json({ message: err.message })
    console.log(err)
  }
}
export default deletePost
