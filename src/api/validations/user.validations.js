const Joi = require('joi')

const updateSelfInfo_validator = async (req, res, next) => {
    const Schema = Joi.object({
        fullname: Joi.string().optional(),
        bio: Joi.string().optional(),
        birthday: Joi.date().optional()
    })
    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}

module.exports = {
    updateSelfInfo_validator
}