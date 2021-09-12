const Router = require('express')
const { remove, create, getAll } = require('../controllers/phoneBookController')

const router = new Router()

router.post('/', create)
router.delete('/', remove)
router.get('/', getAll)

module.exports = router