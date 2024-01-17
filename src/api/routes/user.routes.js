const { Router } = require('express');
const { get_self_info, update_self_info, get_all } = require('../controllers/user.controllers')
const { is_auth } = require('../middlewares');
const { updateSelfInfo_validator } = require('../validations');

const router = Router();

router.get('/user/get_all', get_all)
router.get('/user/self_info', is_auth, get_self_info)
router.patch('/user/update_self_info', is_auth, updateSelfInfo_validator, update_self_info)

module.exports = router