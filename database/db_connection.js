require('env2')('./config.env')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  // we're connected!
  const kittySchema = mongoose.Schema({
    name: String
  })
  const Kitten = mongoose.model('Kitten', kittySchema)
  const keety = new Kitten({name: 'suha'})
  keety.save((error, result) => {
    if (error) {
      console.log(error)
    }
    db.close()
  })
})
