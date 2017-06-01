const convertoption = (item) => {
  item = item.toLowerCase()
  if (item === 'visual') {
    return ['Audio Recordings', 'Braille', 'Big Fonts', 'Carer', 'Place for Guide Dog', 'SMS messaging']
  } else if (item === 'aural') {
    return ['Sign Language']
  } else if (item === 'mental') {
    return ['Good Lighting', 'Carer']
  } else if (item === 'mental') {
    return ['Good Lighting', 'Carer']
  } else if (item === 'physical') {
    return ['WheelChair Access', 'Disabled Parking', 'Disabled Toilets', 'Carer']
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
