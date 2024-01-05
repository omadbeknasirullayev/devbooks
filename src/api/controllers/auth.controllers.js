const { bcryptHash, bcryptCompare } = require("../../utilities/bcrypt")
const { generateToken } = require("../../utilities/jwt")
const { UserModel } = require("../../db/models")
const CustomError = require("../../utilities/custom_error")

/** user registrate */
const registrate = async (req, res, next) => {
    try {
        const { email, password, fullname } = req.body

        const user_email = await UserModel.findOne({ email })

        if (user_email) throw new Error("Email already exists")

        const pass = await bcryptHash(password)

        const new_user = await UserModel.create({ email, password: pass, fullname })

        const token = generateToken(user, "USER")

        return res.status(201).json({ new_user, token })


    } catch (error) {
        console.log(error);
        next(error)
    }
}

/** user login */
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await UserModel.findOne({ email })
        if (!user) throw new CustomError("Email or password incorrect", 400)

        const pass = await bcryptCompare(password, user.password)
        if (!pass) throw new CustomError("Email or password incorrect", 400)

        user.is_active = true
        user.save()

        const token = generateToken(user, "USER")
        res.status(200).json({ token })

    } catch (error) {
        console.log(error);
        next(error)
    }
}

/** user logout */
const logout = async (req, res, next) => {
    try {
        const user = req.verify
        await UserModel.findOneAndUpdate({ _id: user.id }, { is_active: false })
        res.status(200).json({ message: "succeffully logout" })
    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = {
    registrate,
    login,
    logout,
}