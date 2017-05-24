require('env2')('./config.env')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const fs = require('fs')
const mock = JSON.parse(fs.readFileSync('mock data/mock-businesses.json'))

const businessSchema = mongoose.Schema({
  name: String,
  loc: String,
  acessOptions: [],
  open: String,
  desc: String,
  fb: String,
  website: String,
  phoneNumber: String,
  email: String
})

const Business = mongoose.model('business', businessSchema)

const buildFake = () => {
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    // we're connected!
    mock.forEach((fakeData) => {
      const business = new Business(fakeData)

      business.save((err, res) => {
        if (err) console.log(err)
        console.log('business added')
      })
    })
  })
}

const showDb = () => {
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    // we're connected!
    Business.find((err, businessess) => {
      if (err) console.log(err)
      console.log(businessess)
    })
  })
}

showDb()
