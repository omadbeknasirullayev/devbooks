const { bcryptHash, bcryptCompare } = require("../../utilities/bcrypt")
const { generateToken } = require("../../utilities/jwt")
const {UserModel} = require("../../db/models")

/** user registrate */
const registrate = async(req, res) => {
    try {
        const {email, password, fullname} = req.body
        
        const user_email = await UserModel.findOne({email})
        
        if (user_email) throw new Error("Email already exists")
        
        const pass = await bcryptHash(password)

        const new_user = await UserModel.create({email, password: pass, fullname})

        const token =  generateToken({id: new_user._id, active: true})

        return res.status(201).json({new_user, token})


    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
}

/** user login */
const login = async(req, res) => {
    try {
        const {email, password} = req.body

        const user = await UserModel.findOne({email})
        if (!user) throw new Error("Email or password incorrect")

        const pass = await bcryptCompare(password, user.password)
        if (!pass) throw new Error("Email or password incorrect")

        user.is_active = true
        user.save()

        const token = generateToken({id: user._id, active: true})
        res.status(200).json({token})
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
}

/** user logout */
const logout = async(req, res) => {
   
}


module.exports = {
    registrate,
    login
}