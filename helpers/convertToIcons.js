const convertAccessibility = (access) => {
  access = access.toLowerCase()
  switch (access) {
    case 'audio recordings':
      return "class='foundicon-speaker'"
    case 'braille':
      return "class='foundicon-braille'"
    case 'big fonts':
      return "class='foundicon-fontsize'"
    case 'carer':
      return "class='foundicon-person'"
    case 'place for guide dog':
      return "class='foundicon-guidedog'"
    case 'sms messaging':
      return "class='fa fa-mobile'"
    case 'sign language':
      return "class='fa fa-american-sign-language-interpreting'"
    case 'good lighting':
      return "class='fa fa-lightbulb-o'"
    case 'wheelchair access':
      return "class='foundicon-wheelchair'"
    case 'disabled parking':
      return "class='fa fa-car'"
    case 'disabled toilets':
      return "class='blue foundicon-wheelchair'"
    default:
      return access
  }
}

module.exports = convertAccessibility
