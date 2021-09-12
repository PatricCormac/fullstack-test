const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const phoneBookRouter = require('./phoneBookRouter')

router.use('/user', userRouter)
router.use('/phone-book', phoneBookRouter)

module.exports = router