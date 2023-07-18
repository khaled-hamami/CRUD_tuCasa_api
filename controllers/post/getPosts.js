import postModel from "../../models/postModel.js"

const getPosts = async (req, res) => {
  try {
    const delegation = req.body.delegation
    if (!delegation) throw new Error("delegation invalid")
    let posts = []
    posts = await postModel.find({ delegation: delegation })
    res.status(200).json(posts)
  } catch (err) {
    res.status(400).json({ status: "unable to get Posts", error: err.message })
  }
}

export default getPosts
