function convertoption (item) {
  item = item.toLowerCase()
  var options = []
  if (item === 'visual') {
    options = ['Audio Recordings', 'Braille', 'Big Fonts', 'Carer', 'Place for Guide Dog', 'SMS messaging']
  }
  if (item === 'aural') {
    options = ['Sign Language']
  }
  if (item === 'mental') {
    options = ['Good Lighting', 'Carer']
  }
  if (item === 'physical') {
    options = ['WheelChair Access', 'Disabled Parking', 'Disabled Toilets', 'Carer']
  }
  return options
}

function convertarray (array) {
  var wholearr = []
  array.forEach((element) => {
    wholearr = wholearr.concat(convertoption(element))
  })
  return wholearr
}

module.exports = {
  convertarray
}
