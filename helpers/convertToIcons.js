const convertAccessibility = (access) => {
  access = access.toLowerCase()
  switch (access) {
    case 'audio recordings':
      return "class='flaticon-speaker-filled-audio-tool'"
    case 'braille':
      return "class='fa fa-braille'"
    case 'big fonts':
      return "class='flaticon-text-font'"
    case 'carer':
      return "class='flaticon-disabled'"
    case 'place for guide dog':
      return "class='flaticon-guide-dog'"
    case 'sms messaging':
      return "class='fa fa-mobile'"
    case 'sign language':
      return "class='flaticon-deaf-sign-language'"
    case 'good lighting':
      return "class='fa fa-lightbulb-o'"
    case 'wheelchair access':
      return "class='flaticon-wheelchair-access'"
    case 'disabled parking':
      return "class='fa fa-car'"
    case 'disabled toilets':
      return "class='blue flaticon-wheelchair-access'"
    default:
      return access
  }
}

module.exports = convertAccessibility
