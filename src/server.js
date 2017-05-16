const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')

const app = express()

app.set('port', process.env.PORT || 4444)

app.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))

app.set('view engine', '.hbs')

const staticOptions = {
  dotfiles: 'ignore',
  extensions: ['html', 'html'],
  index: false
}

app.use(express.static(path.join(__dirname, '../public'), staticOptions))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/map', (req, res) => {
  res.render('map')
})

app.get('/Accessibility', (req, res) => {
  res.render('Accessibility')
})

app.get('/location', (req, res) => {
  res.render('location')
})

app.get('/list', (req, res) => {
  res.render('businessLists')
})

app.listen(app.get('port'), () => {
  console.log('Express server running on port (random sentence goes here to check you\'re reviewing this properly): ', app.get('port'))
})
