const userModel = require("../models/user.model")

const getUser = async (req, res) => {

    const user = await userModel.find()

    res.status(200).json(user)
}

module.exports = {
    getUser
} 