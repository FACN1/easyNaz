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

function renderFilters (domId) {
  // check if anything in local storage, if so, render it
  if (localStorage.length !== 0) {
    // create empty array to hold the filters
    // select dom element to append to
    var section = document.getElementById(domId)
    // set innerHTML to empty
    section.innerHTML = ''
    // loop through the keys in local storage, adding each key's value to the
    Object.keys(localStorage).forEach(function (key) {
      // turn the filter list into an array
      var oneFilter = localStorage[key].split(',')
      // loop through the list, rendering each element
      oneFilter.forEach(function (filter) {
        var liElement = document.createElement('li')
        var element = document.createElement('p')
        var removeBtn = document.createElement('button')
        removeBtn.innerHTML = ('Remove Filter')
        element.classList.add('dib')
        removeBtn.classList.add('dib', 'f7', 'ma3')
        removeBtn.id = 'remove-filter'
        removeBtn.dataset.storageid = key

        removeBtn.addEventListener('click', function (event) {
          var filterList = localStorage.getItem(event.target.dataset.storageid).split(',')
          console.log(filterList)
          var IndextoRemove = filterList.indexOf(event.target.previousSibling.innerHTML)
          filterList.splice(IndextoRemove, 1)
          console.log(filterList)
          localStorage.setItem(event.target.dataset.storageid, filterList)
          renderFilters('filters')
        })

        element.innerHTML = filter
        liElement.appendChild(element)
        liElement.appendChild(removeBtn)
        section.appendChild(liElement)
      })
    // loop through filters, adding to the div a p for each one
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

// if (document.getElementById('remove-filter')) {
//   var removeBtns = document.querySelectorAll('#remove-filter')
//   var removeArray = [].slice.call(removeBtns)
//
//   removeArray.forEach(function (removeButton) {
//     removeButton.addEventListener('click', function (event) {
//       var filterList = localStorage.getItem(event.target.dataset.storageid).split(',')
//       console.log(filterList)
//       var IndextoRemove = filterList.indexOf(event.target.previousSibling.innerHTML)
//       filterList.splice(IndextoRemove, 1)
//       console.log(filterList)
//       localStorage.setItem(event.target.dataset.storageid, filterList)
//       renderFilters('filters')
//     })
//   })
//   // convert this to actual array from 'array-like' object
// }
