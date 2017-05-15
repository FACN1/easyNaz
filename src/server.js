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

app.get('/location', (req, res) => {
  res.render('location')
})

app.get('/list', (req, res) => {
  res.render('businessLists')
})

app.get('/business', (req, res) => {
  var thisIsAStupidVariableName = req.query.name
  res.render('businessInfo', {
    name: thisIsAStupidVariableName
  })
})

app.listen(app.get('port'), () => {
  console.log('Express server running on port: ', app.get('port'))
})
