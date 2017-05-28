module.exports = (req, res) => {
  res.render('home', {title: 'home page'})
  res.render('result', {
    results: 'mock_result'
  })
}
