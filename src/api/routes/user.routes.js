const {Router} = require('express');
const { getUser } = require('../controllers/user.controllers');

const router = Router();

router.get('/user', getUser)

module.exports = router