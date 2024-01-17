const { UserModel } = require("../../db/models")

const get_all = async (req, res, next) => {
    try {
        const user = await UserModel.find()

        res.status(200).json(user)
        
    } catch (error) {
        next(error)
    }
}

/** user self info */
const get_self_info = async (req, res, next) => {
    try {
        const user = req.user

        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

/** user update self info */
const update_self_info = async (req, res, next) => {
    try {
        const user = req.user
        const { fullanme, bio, birthday } = req.body

        user.fullanme = fullanme || user.fullanme
        user.bio = bio || user.bio
        user.birthday = birthday || user.birthday
        user.save()

        res.status(200).json({ message: "successfully updated" })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    get_all,
    get_self_info,
    update_self_info,
} 