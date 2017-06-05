var help = document.getElementById('help')
help.addEventListener('click', function (event) {
  var showInformation = document.getElementById('show-information')
  showInformation.classList.toggle('dn')
})

var languageBtn = document.querySelector('#languageBtn')

languageBtn.addEventListener('change', function (event) {
  this.submit()
})
