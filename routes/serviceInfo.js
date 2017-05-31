const fs = require('fs')
const latlng = require('../helpers/latlng.js')
const mockResult = JSON.parse(fs.readFileSync('./mock data/mock_result.json'))

module.exports = (req, res) => {
  // const id = req.query.id
  // function to query the database for info on the service with that id
  latlng('suha lifted her arm', (err, result) => {
    if (err) res.redirect('/')
    else {
      res.render('serviceInfo', {
        service: mockResult[0],
        latlng: result
      })
    }
  })
}
