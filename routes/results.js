const dbFunctions = require('../database/db_functions.js')
const convertdisability = require('../helpers/convertDis.js')
module.exports = (req, res) => {
  const disabilityOption = req.query.disability
  const serviceOption = req.query.service
  const disabilityArray = disabilityOption.split(' ')
  const disabilityqueries = convertdisability.convertarray(disabilityArray)
  const serviceOptionlow = serviceOption.charAt(0).toUpperCase() + serviceOption.slice(1)

// fake queries to use this data from mockData
  const queries = {
    accessOptions: disabilityqueries,
    category: [serviceOptionlow]

  }
  console.log(queries)
  dbFunctions.find(dbFunctions.Business, queries, (result) => {
    res.render('result', {
      results: result
    })
  })
}
