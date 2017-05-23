const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const router = require('./routes/index.js')

const app = express()

app.set('port', process.env.PORT || 4444)

app.engine('hbs', hbs({
  defaultLayout: 'main',
  defaultDir: path.join(__dirname, './', 'views/layouts'),
  partialsDir: path.join(__dirname, './', 'views/partials'),
  extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './', 'views'))

app.use(router)
app.use(express.static(path.join(__dirname, './', 'public')))

app.listen(app.get('port'), () => {
  console.log('Server running on port:', app.get('port'))
})

module.exports = app
