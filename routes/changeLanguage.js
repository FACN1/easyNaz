const languages = require('../text.js')

module.exports = (req, res) => {
  const language = req.body.language
  const text = languages[language]
  let dir = 'ltr'
  let lang = 'en'

  if (language === 'arabic') {
    dir = 'rtl'
    lang = 'ar'
  }

  req.app.locals.dir = dir
  req.app.locals.text = text
  req.app.locals.lang = lang

  const refererLong = req.headers.referer
  res.redirect(refererLong)
}
