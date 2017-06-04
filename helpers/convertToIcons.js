const convertAccessibility = (access) => {
  access = access.toLowerCase()
  switch (access) {
    case 'audio recordings':
      return 'foundicon-speaker'
    case 'braille':
      return 'foundicon-braille'
    case 'big fonts':
      return 'foundicon-fontsize'
    case 'Carer':
      return 'foundicon-person'
    case 'place for guide dog':
      return 'foundicon-guidedog'
    case 'sms messaging':
      return 'fa fa-mobile'
    case 'sign language':
      return 'foundicon-asl'
    default:
      return []
  }
}

module.exports = convertAccessibility
// Audio Recordings, Braille, Big Fonts, Carer, Place for Guide Dog, SMS messaging, Sign Language, Good Lighting, WheelChair Access, Disabled Parking, Disabled Toilets
