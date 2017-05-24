var buttons = document.getElementById('buttons').children
var buttonsArray = [].slice.call(buttons)
buttonsArray.forEach(function (button) {
  button.addEventListener('click', function (event) {
    var state = (event.target.getAttribute('aria-pressed') === 'true')
    event.target.setAttribute('aria-pressed', !state)
  })
})
