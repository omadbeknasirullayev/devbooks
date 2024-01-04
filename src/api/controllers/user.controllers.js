const { UserModel } = require("../../db/models")

const getUser = async (req, res) => {

    const user = await UserModel.find()

    res.status(200).json(user)
}

module.exports = {
    getUser
} 