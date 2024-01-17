const { Router } = require('express');
const { create_author, get_all, get_one, update } = require('../controllers/authors.controllers')
const { is_auth } = require('../middlewares');
const { create_author_validator, update_author_validator } = require('../validations');

const router = Router();

router.post('/author/create', create_author_validator, create_author)
router.get('/author/get_one/:id', get_one)
router.get('/author/get_all', get_all)
router.patch('/author/update/:id', update_author_validator, update)

module.exports = router