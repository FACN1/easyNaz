const fs = require('fs')
const mockResult = JSON.parse(fs.readFileSync('./mock data/mock_result.json'))

module.exports = (req, res) => {
  const disabilityOption = req.query.disability.toString()
  // const serviceOption = req.query.service.toString()

  const options = ['visual', 'aural', 'mental', 'Physical']

  if (disabilityOption === options) {
    console.log('wheelchair')
  }
  res.render('result', {
    results: mockResult
  })
}
