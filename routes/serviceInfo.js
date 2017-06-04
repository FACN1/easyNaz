const latLng = require('../helpers/latlng.js')
const dbFunctions = require('../database/db_functions.js')

module.exports = (req, res) => {
  const id = req.query.id
  dbFunctions.findById(dbFunctions.Business, id, (error, service) => {
    if (error) res.render('notFound')
    else {
      // coordinates means إحداثيات
      latLng(service[0].Loc, (err, coordinates) => {
        if (err) res.render('notFound')
        else {
          res.render('serviceInfo', {
            service: service[0],
            latlng: coordinates
          })
        }
      })
    }
  })
  // function to query the database for info on the service with that id
  // latlng('suha lifted her arm', (err, result) => {
  //   if (err) res.redirect('/')
  //   else {
  //     res.render('serviceInfo', {
  //       service: mockResult[0],
  //       latlng: result
  //     })
  //   }
  // })
}
