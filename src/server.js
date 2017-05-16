const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')

const app = express()

const businesses = require('./data.js').businesses

app.set('port', process.env.PORT || 4444)

app.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    link: (id) => {
      return `href="/business?id=${id}"`
    }
  }
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
  res.render('businessLists', {
    businesses: businesses
  })
})

app.get('/business', (req, res) => {
  const businessId = parseInt(req.query.id)
  const business = businesses.find((biz) => {
    return biz.id === businessId
  })

  res.render('businessInfo', {
    business: business
  })
})

app.get('/businessType', (req, res) => {
  res.render('businessTypes')
})

app.listen(app.get('port'), () => {
  console.log('Express server running on port: ', app.get('port'))
})
