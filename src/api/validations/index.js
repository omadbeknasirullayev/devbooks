const { registr_validator, login_validator } = require("./auth.validations")
const { updateSelfInfo_validator } = require('./user.validations')
const { create_author_validator, update_author_validator } = require('./authors.validation')

module.exports = {

    // auth
    registr_validator,
    login_validator,

    // user
    updateSelfInfo_validator,

    // author
    create_author_validator,
    update_author_validator,
}