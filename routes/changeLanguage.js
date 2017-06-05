const languages = require('../text.js')

module.exports = (req, res) => {
  const language = req.body.language
  const text = languages[language]
  let dir = 'ltr'

  if (language === 'arabic') {
    dir = 'rtl'
  }

  req.app.locals.dir = dir
  req.app.locals.text = text

  const refererLong = req.headers.referer
  res.redirect(refererLong)
}
