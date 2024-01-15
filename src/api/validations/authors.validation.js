const Joi = require('joi')

const create_author_validator = async (req, res, next) => {
    const Schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        country: Joi.string().required(),
        birthday: Joi.date().required(),
        deathday: Joi.date().required(),
        bio: Joi.string().required(),
    })
    const { error } = Schema.validate(req.body);

    if (error) {
        console.log(error);
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}

module.exports = {
    create_author_validator
}