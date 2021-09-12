const Router = require('express')
const { registration, login, check } = require('../controllers/useController')
const router = new Router()

router.post('/registration', registration)
router.post('/login', login)
router.get('/auth', check)

module.exports = router