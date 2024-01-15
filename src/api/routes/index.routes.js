const user = require("./user.routes")
const auth = require("./auth.routes")
const author = require("./authors.routes")

module.exports = [
    user,
    auth,
    author,
]