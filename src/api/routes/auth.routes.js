const { Router } = require('express');
const { registrate, login, logout } = require("../controllers/");
const { registr_validator, login_validator } = require('../validations');
const { is_auth } = require('../middlewares');


const router = Router();

router.post('/auth/registrate', registr_validator,  registrate)
router.post('/auth/login', login_validator, login)
router.post('/auth/logout', is_auth, logout)

module.exports = router