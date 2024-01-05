const { Router } = require('express');
const { getUser } = require('../controllers/user.controllers');
const { get_self_info, update_self_info } = require('../controllers')
const { is_auth } = require('../middlewares');
const { updateSelfInfo_validator } = require('../validations');

const router = Router();

router.get('/user', getUser)
router.get('/user/self_info', is_auth, get_self_info)
router.patch('/user/update_self_info', is_auth, updateSelfInfo_validator, update_self_info)

module.exports = router