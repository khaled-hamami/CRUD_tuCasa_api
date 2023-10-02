import userModel from "../../models/userModel.js"

const login = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    })

    if (!user) {
      throw new Error("L'utilisateur n'existe pas")
    }

    if (req.body.password !== user.password) {
      throw new Error("Email ou mot de passe incorrect")
    }

    res.status(200).json({ status: "Utilisateur trouvé", payload: user })
  } catch (err) {
    let errorMessage = ""

    if (err.message === "L'utilisateur n'existe pas") {
      errorMessage = "Utilisateur non trouvé"
    } else if (err.message === "Mot de passe incorrect") {
      errorMessage = "Mot de passe incorrect"
    } else {
      errorMessage = "Erreur inattendue"
    }

    res.status(404).json({ status: errorMessage, error: err.message })
  }
}

export default login
