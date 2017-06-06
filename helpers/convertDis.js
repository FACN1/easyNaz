const convertoption = (item) => {
  item = item.toLowerCase()
  switch (item) {
    case 'visual':
      return ['Audio Recordings', 'Braille', 'Big Fonts', 'Carer', 'Place for Guide Dog', 'SMS messaging']
    case 'aural':
      return ['Sign Language']
    case 'mental':
      return ['Good Lighting', 'Carer']
    case 'physical':
      return ['WheelChair Access', 'Disabled Parking', 'Disabled Toilets', 'Carer']
    default:
      return []
  }
}
const convertarray = (array) => {
  var wholearr = []
  array.forEach((element) => {
    wholearr = wholearr.concat(convertoption(element))
  })
  return wholearr
}

const capitalise = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

module.exports = {
  convertarray,
  capitalise
}
