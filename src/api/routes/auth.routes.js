const { Router } = require('express');
const { registrate, login } = require("../controllers/");
const { registr_validator, login_validator } = require('../validations');


const router = Router();

router.post('/auth/registrate', registr_validator,  registrate)
router.post('/auth/login', login_validator, login)

module.exports = router