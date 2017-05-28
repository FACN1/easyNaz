const router = require('express').Router()

const homePage = require('./home.js')

const resultPage = require('./results.js')

router.get('/', homePage)
router.get('/result', resultPage)
module.exports = router
