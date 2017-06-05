const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const router = require('./routes/index.js')
var bodyParser = require('body-parser')
require('env2')('./config.env')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const favicon = require('serve-favicon')
require('env2')('./config.env')

const app = express()
const db = mongoose.connection

// import the languages object and set the default language and text dir for arabic
const languages = require('./text.js')
let language = 'arabic'
let lang = 'ar'
let text = languages[language]
let dir = 'rtl'

app.set('port', process.env.PORT || 4444)

app.locals.dir = dir
app.locals.text = text
app.locals.lang = lang

const pubPath = path.join(__dirname, './', 'public')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')))
app.use(express.static(pubPath))

app.use((req, res, next) => {
  res.locals = app.locals
  next()
})

app.engine('hbs', hbs({
  defaultLayout: 'main',
  defaultDir: path.join(__dirname, './', 'views/layouts'),
  partialsDir: path.join(__dirname, './', 'views/partials'),
  extname: 'hbs',
  helpers: {
    serviceInfoLink: (id) => {
      return `href="/serviceinfo?id=${id}"`
    },
    mapSrcLink: () => {
      return `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API}&callback=_myMap`
    }
  }
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
