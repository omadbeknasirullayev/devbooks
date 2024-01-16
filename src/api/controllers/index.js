const { registrate, login, logout } = require('./auth.controllers')
const { get_self_info, update_self_info } = require('./user.controllers')
const { create_author, get_all } = require('./authors.controllers')

module.exports = {
    // auth
    registrate,
    login,
    logout,

    // user
    get_self_info,
    update_self_info,

    // author
    create_author,
    get_all,
}