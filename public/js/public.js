/*  eslint-env browser  */

// event listener to add to filter buttons
var filterListener = function () {
  return function (event) {
    // set filters array to be empty
    var filtersArray = []
    // check to see if any filters of this button id are already in local storage
    // if so, make these to the filters array
    var filters = localStorage.getItem(event.target.id)
    if (filters) {
      filtersArray = filters.split(',')
    }
    // check state of button, toggle to be opposite
    var state = (event.target.getAttribute('aria-pressed') === 'true')
    event.target.setAttribute('aria-pressed', !state)
    // if state is false (unchecked before pressed)
    // push the innerHTML of button that was pressed to the
    // filters array
    if (!state) {
      filtersArray.push(event.target.innerHTML)
    } else {
      // if the state is true (checked before pressed)
      // remove the button clicked from filters array
      var index = filtersArray.indexOf(event.target.innerHTML)
      filtersArray.splice(index, 1)
    }
    // add refresh the local storage with the new checked or unchecked button
    localStorage.setItem(event.target.id, filtersArray)
    // render the new local storage items
    renderFilters('filters')
  }
}

function renderFilters (domId) {
  // check if anything in local storage, if so, render it
  if (localStorage.length !== 0) {
    // create empty array to hold the filters
    var allFilters = []
    // loop through the keys in local storage, adding each key's value to the
    // allFilters array
    Object.keys(localStorage).forEach(function (key) {
      var oneFilter = localStorage[key].split(',')
      allFilters = allFilters.concat(oneFilter)
    })
    // select dom element to append to
    var section = document.getElementById(domId)
    // set innerHTML to empty
    section.innerHTML = ''
    // loop through filters, adding to the div a p for each one
    allFilters.forEach(function (filter) {
      var element = document.createElement('p')
      element.innerHTML = filter
      section.appendChild(element)
    })
  }
}

renderFilters('filters')

var filterButtons = document.getElementById('filter-buttons').children
var filterButtonsArray = [].slice.call(filterButtons)

filterButtonsArray.forEach(function (button) {
  button.addEventListener('click', filterListener())
})

// add event listener to submit button on sevice page
var resultButton = document.getElementById('results-button')
if (resultButton) {
  resultButton.addEventListener('submit', function (event) {
    console.log('lets go')
  })
}
