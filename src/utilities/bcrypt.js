const bcryptjs = require('bcryptjs');

const bcryptHash = async (password) => await bcryptjs.hash(password, 7);
const bcryptCompare = async (password, oldPassword) => await bcryptjs.compare(password, oldPassword);

module.exports = {
    bcryptHash, 
    bcryptCompare
}