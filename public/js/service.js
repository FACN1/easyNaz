/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "filters" }] */
/*  eslint-env browser  */
/* global buttonListener */

var servicesButtons = document.getElementById('services-buttons').children

// convert buttons from an array like object to an array
var servicesArray = [].slice.call(servicesButtons)

var filters = []

servicesArray.forEach(function (button) {
  button.addEventListener('click', buttonListener('servicesFilters'))
})
