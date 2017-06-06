const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const router = require('./routes/index.js')
const bodyParser = require('body-parser')
const convertToIcons = require('./helpers/convertToIcons.js')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const favicon = require('serve-favicon')
require('env2')('./config.env')

const app = express()
const db = mongoose.connection
app.set('port', process.env.PORT || 4444)

// import the languages object and set the default language and text dir for arabic
const languages = require('./text.js')
const language = 'arabic'
const lang = 'ar'
const text = languages[language]
const dir = 'rtl'

app.locals.dir = dir
app.locals.text = text
app.locals.lang = lang

const pubPath = path.join(__dirname, './', 'public')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')))
app.use(express.static(pubPath))

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
    },
    convertToIcons: convertToIcons,
    chooseBack: (dir) => {
      if (dir === 'ltr') {
        return 'fa fa-arrow-left'
      } else {
        return 'fa fa-arrow-right'
      }
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
