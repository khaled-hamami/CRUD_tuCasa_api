import userModel from "../models/userModel.js"

const createUser = async (req, res) => {
  try {
    const newUser = new userModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    await newUser.save()
    //must hash the password
    res
      .status(201)
      .json({ status: " User created successfully", payload: newUser })
  } catch (err) {
    res
      .status(500)
      .json({ status: "failed to create User", error: err.message })
  }
}
export default createUser
