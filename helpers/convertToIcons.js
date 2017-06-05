const convertAccessibility = (access) => {
  access = access.toLowerCase()
  switch (access) {
    case 'audio recordings':
      return 'foundicon-speaker'
    case 'braille':
      return 'foundicon-braille'
    case 'big fonts':
      return 'foundicon-fontsize'
    case 'carer':
      return 'foundicon-person'
    case 'place for guide dog':
      return 'foundicon-guidedog'
    case 'sms messaging':
      return 'fa fa-mobile'
    case 'sign language':
      return 'foundicon-asl'
    case 'good lighting':
      return 'fa fa-lightbulb-o'
    case 'wheelchair access':
      return 'foundicon-wheelchair'
    case 'disabled parking':
      return 'fa fa-car'
    case 'disabled toilets':
      return 'foundicon-wheelchair'
    default:
      return access
  }
}

module.exports = convertAccessibility
// Audio Recordings, Braille, Big Fonts, Carer, Place for Guide Dog, SMS messaging, Sign Language, Good Lighting, WheelChair Access, Disabled Parking, Disabled Toilets
