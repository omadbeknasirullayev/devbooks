const jwt = require('jsonwebtoken');

const {jwt_secret_key} = require("../config");

const generateToken = (data, role) => {

    const payload = {
        id: data._id,
        role
    }

    return jwt.sign(payload, jwt_secret_key); 
};
const verifyToken = (payload, callback) => { return jwt.verify(payload, jwt_secret_key, callback); };

module.exports = {
    generateToken,
    verifyToken,
}