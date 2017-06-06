const dbFunctions = require('../database/db_functions.js')
const convertFunctions = require('../helpers/convertDis.js')
module.exports = (req, res) => {
  // format the disability choices for database, choose all if none selected
  const disabilityOption = req.query.disability
  let disabilityQueries
  if (disabilityOption) {
    const disabilityArray = disabilityOption.split(',')
    disabilityQueries = convertFunctions.convertarray(disabilityArray)
  } else {
    disabilityQueries = ['Audio Recordings', 'Braille', 'Big Fonts', 'Carer', 'Place for Guide Dog', 'SMS messaging', 'Sign Language', 'Good Lighting', 'WheelChair Access', 'Disabled Parking', 'Disabled Toilets']
  }
  // format the service choices
  const serviceOption = req.query.services
  let serviceQueries
  if (serviceOption) {
    serviceQueries = convertFunctions.capitalise(serviceOption).split(',')
  } else {
    serviceQueries = ['Food', 'Sport', 'Education', 'Health', 'Municipal', 'Fashion', 'Construction', 'IT', 'Tourism']
  }

  const queries = {
    accessOptions: disabilityQueries,
    category: serviceQueries
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
