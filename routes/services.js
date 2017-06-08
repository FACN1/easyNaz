const text = require('../text.js').english

module.exports = (req, res) => {
  res.render('services', {
    title: text.serviceTitle
  })
}
