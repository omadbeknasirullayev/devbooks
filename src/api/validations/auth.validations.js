const Joi = require('joi')

/** user register validator */
const registr_validator = async (req, res, next) => {

    const Schema = Joi.object({
        fullname: Joi.string().max(100),
        email: Joi.string().email(),
        password: Joi.string()
    })
    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}

/** user login validator */
const login_validator = async (req, res, next) => {

    const Schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().min(4).max(16)
    })
    const { error } = await Schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}

module.exports = {
    registr_validator,
    login_validator,
}