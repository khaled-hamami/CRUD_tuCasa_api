import userModel from "../../models/userModel.js"

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
      .json({ status: " Utilisateur créé avec succès", payload: newUser })
  } catch (err) {
    res
      .status(500)
      .json({
        status: "Échec de la création de l'utilisateur",
        error: err.message,
      })
  }
}
export default createUser
