const dbFunctions = require('../database/db_functions.js')
const convertFunctions = require('../helpers/convertDis.js')
module.exports = (req, res) => {
  const disabilityOption = req.query.disability
  const serviceOption = convertFunctions.capitalise(req.query.service)
  const disabilityArray = disabilityOption.split(' ')
  const disabilityqueries = convertFunctions.convertarray(disabilityArray)

// fake queries to use this data from mockData
  const queries = {
    accessOptions: disabilityqueries,
    category: [serviceOption]

  }
  dbFunctions.find(dbFunctions.Business, queries, (result) => {
    if (result.length === 0) {
      res.render('notFound')
    } else {
      res.render('result', {
        results: result
      })
    }
  })
}
