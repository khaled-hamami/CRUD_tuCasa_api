import userModel from "../../models/userModel.js"

const login = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    })
    if (!user) throw new Error("user doesnt exist")
    res.status(200).json({ status: "user found", payload: user })
  } catch (err) {
    res.status(404).json({ status: "User not found", error: err.message })
  }
}
export default login
