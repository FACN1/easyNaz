/*  eslint-env browser  */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "buttonListener" }] */

var filters = []
var buttonListener = function (filterKey) {
  return function (event) {
    console.log('clicking')
    var state = (event.target.getAttribute('aria-pressed') === 'true')
    event.target.setAttribute('aria-pressed', !state)
    if (!state) {
      filters.push(event.target.innerHTML)
    } else {
      var index = filters.indexOf(event.target.innerHTML)
      filters.splice(index, 1)
    }
    localStorage.setItem(filterKey, filters)
    renderFilters(filters)
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
