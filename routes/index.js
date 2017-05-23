const router = require('express').Router()

const homePage = require('./home.js')

router.get('/', homePage)

module.exports = router
