import userModel from "../../models/userModel.js"

const getContactInfo = async (req, res) => {
  try {
    const { id } = req.body
    const contactinfo = await userModel.findOne({ _id: id })

    if (!contactinfo) {
      throw new Error("Contact n'est pas trouvé")
    }

    res.status(200).json(contactinfo.email)
  } catch (err) {
    res.status(400).json(err.message)
  }
}
export default getContactInfo
