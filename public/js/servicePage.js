/*  eslint-env browser  */

var buttons = document.getElementById('services-buttons').children
// convert buttons from an array like object to an array
var buttonsArray = [].slice.call(buttons)
var filters = []

buttonsArray.forEach(function (button) {
  button.addEventListener('click', function (event) {
    var state = (event.target.getAttribute('aria-pressed') === 'true')
    event.target.setAttribute('aria-pressed', !state)
    if (!state) {
      filters.push(event.target.innerHTML)
    } else {
      var index = filters.indexOf(event.target.innerHTML)
      filters.splice(index, 1)
    }
    localStorage.setItem('ServiceFilters', filters)
    renderFilters(filters)
  })
})

function renderFilters (filters) {
  var section = document.getElementById('filters')
  section.innerHTML = ''
  filters.forEach(function (filter) {
    var element = document.createElement('p')
    element.innerHTML = filter
    section.appendChild(element)
  })
}
