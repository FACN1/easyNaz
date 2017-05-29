const router = require('express').Router()

const homePage = require('./home.js')
const resultPage = require('./results.js')
const servicesPage = require('./services.js')

router.get('/', homePage)
router.get('/services', servicesPage)
router.get('/result', resultPage)

module.exports = router
