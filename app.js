const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const router = require('./routes/index.js')
const text = require('./text.js').english
require('env2')('./config.env')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const favicon = require('serve-favicon')

const app = express()
const db = mongoose.connection

app.locals.text = text

app.set('port', process.env.PORT || 4444)

const pubPath = path.join(__dirname, './', 'public')

app.use(favicon(path.join(__dirname, './public', 'favicon.ico')))
app.use(express.static(pubPath))

app.engine('hbs', hbs({
  defaultLayout: 'main',
  defaultDir: path.join(__dirname, './', 'views/layouts'),
  partialsDir: path.join(__dirname, './', 'views/partials'),
  extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './', 'views'))

app.use(router)

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  app.listen(app.get('port'), () => {
    console.log('Server running on port:', app.get('port'))
  })
})
