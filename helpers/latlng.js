require('env2')('./config.env')
const queryString = require('querystring')
const request = require('request')

const getLatLng = (address, cb) => {
  const baseURI = 'https://maps.googleapis.com/maps/api/geocode/json?'
  const addressURI = encodeURIComponent(address)
  const queryParams = queryString.stringify({
    address: addressURI,
    key: process.env.GOOGLE_API
  })
  const requestURI = baseURI + queryParams
  request(requestURI, (err, res, body) => {
    if (err) cb(err)
    const location = JSON.parse(body).results[0]
    if (location) {
      cb(null, JSON.parse(body).results[0].geometry.location)
    } else {
      cb(null, { lat: 32.6996, lng: 35.3035 })
    }
  })
}

module.exports = getLatLng
