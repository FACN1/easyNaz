const router = require('express').Router()

const homePage = require('./home.js')
const resultPage = require('./results.js')
const servicesPage = require('./services.js')
const serviceInfoPage = require('./serviceInfo.js')
const changeLanguage = require('./changeLanguage.js')

router.get('/', homePage)
router.get('/services', servicesPage)
router.get('/result', resultPage)
router.get('/serviceinfo', serviceInfoPage)
router.post('/language_change', changeLanguage)

module.exports = router
