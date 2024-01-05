const { registr_validator, login_validator } = require("./auth.validations")
const { updateSelfInfo_validator } = require('./user.validations')

module.exports = {
    
    // auth
    registr_validator,
    login_validator,

    // user
    updateSelfInfo_validator
}