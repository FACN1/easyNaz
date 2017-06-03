/*  eslint-env browser  */

// event listener to add to filter buttons
var filterListener = function () {
  return function (event) {
    // set filters array to be empty
    var filtersArray = []
    // check to see if any filters of this button id are already in local storage
    // if so, make these to the filters array
    var filters = localStorage.getItem(event.target.dataset.storageid)
    if (filters) {
      filtersArray = filters.split(',')
    }
    // check state of button, toggle to be opposite
    var state = (event.target.getAttribute('aria-pressed') === 'true')
    event.target.setAttribute('aria-pressed', !state)
    // check if the filter is already in local storage.
    // if false, push the innerHTML in to the filters array
    // if true, remove the innerHTML clicked from filters array
    var index = filtersArray.indexOf(event.target.innerHTML)
    if (index === -1) {
      filtersArray.push(event.target.innerHTML)
    } else {
      filtersArray.splice(index, 1)
    }
    // add refresh the local storage with the new checked or unchecked button
    localStorage.setItem(event.target.dataset.storageid, filtersArray)
    // render the new local storage items
    renderFilters('filters')
    // call the functions to change the url of the <a> link
    changeResultUrl(constructURL())
  }
}

var removeListener = function () {
  return function (event) {
    // get the list of the filterTypes (disability or service) that the button is attached to, using the dataset
    var filterList = localStorage.getItem(event.target.dataset.storageid).split(',')
    // find index of the specific filter (mental/aural) and remove it
    var IndextoRemove = filterList.indexOf(event.target.previousSibling.innerHTML)
    filterList.splice(IndextoRemove, 1)
    // reset the local storage
    localStorage.setItem(event.target.dataset.storageid, filterList)
    // render the filters
    renderFilters('filters')
  }
}

function renderFilters (domId) {
  // check if anything in local storage, if so, render it
  if (localStorage.length !== 0) {
    // select dom element to append to
    var section = document.getElementById(domId)
    // set innerHTML to empty
    section.innerHTML = ''
    // loop through the keys in local storage, making an array of each filter type's choices, and then render a list element with the name of the filter and a button to remove it
    Object.keys(localStorage).forEach(function (filterType) {
      // check there is anything in the local storage for that filter type turn the filter list into an array
      if (localStorage[filterType]) {
        var oneFilter = localStorage[filterType].split(',')
        // loop through the list, rendering each element
        oneFilter.forEach(function (filter) {
          var liElement = document.createElement('li')
          var element = document.createElement('p')
          var removeBtn = document.createElement('button')
          // In order to retain arabic/english functionality
          // Could maybe be an icon with aria label
          removeBtn.innerHTML = document.body.dataset.remove.replace('-', ' ')
          // add classes for tachyon styling
          element.classList.add('dib')
          removeBtn.classList.add('dib', 'f7', 'ma3')
          // give the button a dataset to identify the filter type it is assigned to, in order for the remove function to work
          removeBtn.dataset.storageid = filterType

          removeBtn.addEventListener('click', removeListener())
          element.innerHTML = filter
          liElement.appendChild(element)
          liElement.appendChild(removeBtn)
          section.appendChild(liElement)
        })
      }
    })
  }
}

// select the different filter buttons (if they are on the page)
var filterButtons = document.getElementById('filter-buttons').children
if (filterButtons) {
  // convert this to actual array from 'array-like' object
  var filterButtonsArray = [].slice.call(filterButtons)
  // add event listener to each button
  filterButtonsArray.forEach(function (button) {
    button.addEventListener('click', filterListener())
  })
}

// function to build a url out of the filters
var constructURL = function () {
  var urlDis = encodeURIComponent(localStorage.getItem('disability'))
  var urlSer = encodeURIComponent(localStorage.getItem('services'))
  return ('/result?disability=' + urlDis + '&services=' + urlSer)
}

// function to change the link href to the query url
var changeResultUrl = function (url) {
  var resultLink = document.getElementById('result-link')
  if (resultLink) {
    resultLink.href = url
  }
}

// on page load change the result link and render the current filters
changeResultUrl(constructURL())
renderFilters('filters')
