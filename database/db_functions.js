require('env2')('./config.env')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

// define the schema for our table
const businessSchema = mongoose.Schema({
  name: String,
  loc: String,
  accessOptions: [String],
  open: String,
  desc: String,
  fb: String,
  website: String,
  phoneNumber: String,
  email: String
});

// make a model following the schema
const Business = mongoose.model('business', businessSchema)

// function to build a data base, given some data
const buildFake = (mock, Model) => {
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    // we're connected!
    mock.forEach((fakeData) => {
      const business = new Model(fakeData)

      business.save((err, res) => {
        if (err) console.log(err)
        console.log('business added')
      })
    })
  })
}

// function to show the whole database
const showDb = (Model) => {
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    // we're connected!
    Model.find((err, businessess) => {
      if (err) console.log(err)
      console.log(businessess)
    })
  })
}

// define a basic find function
const find = (Model, option) => {
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    // we're connected!
    // below we look for results that contain option in the accessOptions
    // We should develop this function more
    Model.find({
      'accessOptions': option
    }, (err, result) => {
      if (err) return console.log(err)
      console.log(result)
      db.close()
    })
  })
}

module.exports = {
  buildFake,
  showDb,
  find,
  businessSchema,
  Business
}
