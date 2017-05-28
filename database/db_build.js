const dbFunctions = require('./db_functions.js')
const fs = require('fs')

const mockData = JSON.parse(fs.readFileSync('mock data/mock_businesses.json'))

dbFunctions.buildFake(mockData, dbFunctions.Business)
