const { registrate, login, logout } = require('./auth.controllers')
const { get_self_info, update_self_info } = require('./user.controllers')


module.exports = {
    // auth
    registrate,
    login,
    logout,

    // user
    get_self_info,
    update_self_info,
}