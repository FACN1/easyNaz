const router = require('express').Router()

const homePage = require('./home.js')
const servicesPage = require('./services.js')

router.get('/', homePage)
router.get('/services', servicesPage)

module.exports = router
