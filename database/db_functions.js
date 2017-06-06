require('env2')('./config.env')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

// define the schema for our table
const businessSchema = mongoose.Schema({
  name: String,
  address: String,
  category: [String],
  accessOptions: [String],
  open: String,
  desc: String,
  fb: String,
  website: String,
  phoneNumber: String,
  email: String
})

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
const find = (Model, option, callback) => {
  Model.aggregate([
    {$match: {$and: [
    {'accessOptions': {$in: option.accessOptions}},
    {'category': {$in: option.category}}
    ]}},
  {$unwind: '$accessOptions'},
  {$unwind: '$category'},
    {$match: {$and: [
    {'accessOptions': {$in: option.accessOptions}},
    {'category': {$in: option.category}}
    ]}},
    {$group: {
      _id: '$_id',
      counter: {$sum: 1},
      accessOptions: {$push: '$accessOptions'},
      category: {'$first': '$category'},
      name: {'$first': '$name'},
      loc: {'$first': '$loc'},
      open: {'$first': '$open'},
      desc: {'$first': '$desc'},
      fb: {'$first': '$fb'},
      website: {'$first': '$website'},
      phoneNumber: {'$first': '$phoneNumber'},
      email: {'$first': '$email'}
    }},
  {$sort: {counter: -1}}
  ], (err, result) => {
    if (err) return callback(err)
    callback(result)
  })
}
const query = {
  accessOptions: ['Carer', 'Disabled Parking', 'Big Fonts', 'Audio Recordings'],
  category: ['Health', 'IT']
}

find(Business, query, console.log)

module.exports = {
  buildFake,
  showDb,
  find,
  businessSchema,
  Business
}
