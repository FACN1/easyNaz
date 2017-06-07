const latLng = require('../helpers/latlng.js')
const { Business } = require('../database/db_functions.js')

module.exports = (req, res) => {
  const id = req.query.id
  Business.findById(id, (error, service) => {
    if (error) res.render('notFound')
    else {
      latLng(service.address, (err, coordinates) => {
        if (err) res.render('notFound')
        else {
          res.render('serviceInfo', {
            service: service,
            latlng: coordinates,
            back: req.headers.referer
          })
        }
      })
    }
  })
}
