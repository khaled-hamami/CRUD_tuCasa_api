import postModel from "../../models/postModel.js"

const userPosts = async (req, res) => {
  try {
    const userId = req.body.userId
    if (!userId) throw new Error("Identifiant d'utilisateur invalide")

    let posts = []
    posts = await postModel.find({ userId: userId })
    res.status(200).json(posts)
  } catch (err) {
    res
      .status(400)
      .json({
        status: "Impossible de récupérer les publications",
        error: err.message,
      })
  }
}

export default userPosts
