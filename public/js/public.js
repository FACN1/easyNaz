/*  eslint-env browser  */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "buttonListener" }] */
var buttonListener = function () {
  return function (event) {
    var filtersArray = []
    filters = localStorage.getItem('filters')
    if (filters) {
      filtersArray = filters.split(',')
    }
    var state = (event.target.getAttribute('aria-pressed') === 'true')
    event.target.setAttribute('aria-pressed', !state)
    if (!state) {
      filtersArray.push(event.target.innerHTML)
    } else {
      var index = filtersArray.indexOf(event.target.innerHTML)
      filtersArray.splice(index, 1)
    }
    localStorage.setItem('filters', filtersArray)
    renderFilters(filtersArray)
    console.log(filtersArray)
  }
}

function renderFilters (filters) {
  var section = document.getElementById('filters')
  section.innerHTML = ''
  filters.forEach(function (filter) {
    var element = document.createElement('p')
    element.innerHTML = filter
    section.appendChild(element)
  })
}

var filters = localStorage.getItem('filters')

if (filters) {
  renderFilters(filters.split(','))
}
var filterButtons = document.getElementById('filter-buttons').children
var filterButtonsArray = [].slice.call(filterButtons)

filterButtonsArray.forEach(function (button) {
  button.addEventListener('click', buttonListener())
})
