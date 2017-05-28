var clickDiv = document.getElementById('helpSubmit')
clickDiv.addEventListener('click', function (event) {
  var divInfo = document.getElementById('helpInformation')
  divInfo.classList.toggle('dn')
})
