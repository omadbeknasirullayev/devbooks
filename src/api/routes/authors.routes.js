const { Router } = require('express');
const { create_author, get_all } = require('../controllers')
const { is_auth } = require('../middlewares');
const { create_author_validator } = require('../validations');

const router = Router();

router.post('/author/create', create_author_validator, create_author)
router.get('/user/self_info', get_all)

module.exports = router