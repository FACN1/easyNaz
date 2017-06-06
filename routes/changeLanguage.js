const languages = require('../text.js')

module.exports = (req, res) => {
  // change language to what the user clicked on
  const language = req.body.language
  const text = languages[language]
  let dir = 'ltr'
  let lang = 'en'

  if (language === 'arabic') {
    dir = 'rtl'
    lang = 'ar'
  }

  // set the locals
  req.app.locals.dir = dir
  req.app.locals.text = text
  req.app.locals.lang = lang

  // redirect back to the page they clicked the button from
  res.redirect(req.headers.referer)
}
