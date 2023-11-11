import userModel from "../../models/userModel.js"

const login = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    })

    if (!user) {
      throw new Error("Email ou mot de passe incorrect")
    }

    if (req.body.password !== user.password) {
      throw new Error("Email ou mot de passe incorrect")
    }

    res.status(200).json({ status: "Utilisateur trouvé", payload: user })
  } catch (err) {
    res.status(400).json(err.message || "Erreur inattendue")
  }
}

export default login
