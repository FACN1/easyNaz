const dbFunctions = require('../database/db_functions.js')

module.exports = (req, res) => {
  // const disabilityOption = req.query.disability.toString()
  // const serviceOption = req.query.service.toString()

// fake queries to use this data from mockData
  const fakeQueries = {
    accessOptions: ['Braille', 'Carer'],
    category: ['Health']
  }
  dbFunctions.find(dbFunctions.Business, fakeQueries, (result) => {
    res.render('result', {
      results: result
    })
  })
}
