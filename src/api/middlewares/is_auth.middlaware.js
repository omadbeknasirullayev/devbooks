const { UserModel } = require("../../db/models");
const CustomError = require("../../utilities/custom_error");
const jwt = require("../../utilities/jwt");

/** Check token */
const isAuth = async (req, res, next) => {
    try {
        let token = req.headers?.authorization


        if (!token) {
            throw new CustomError('Invalid token', 401);
        };

        token = token.split(" ")[1]

        const result = await jwt.verifyToken(token)

        let data
        if (result.role == "USER") data = await UserModel.findOne({ _id: result.id })
        else throw new CustomError('Invalid token', 401)


        if (data.is_active == false) {
            throw new CustomError('Invalid token', 401)
        }

        req.verify = result
        req.user = data
        next();

    } catch (error) {
        next(error);
    }
}

module.exports = isAuth;