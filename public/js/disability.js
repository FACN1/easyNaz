/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "filters" }] */
/*  eslint-env browser  */
/* global buttonListener */

var disabilityButtons = document.getElementById('disability-buttons').children
var disabilityArray = [].slice.call(disabilityButtons)

var filters = []

disabilityArray.forEach(function (button) {
  button.addEventListener('click', buttonListener('disabilityFilters'))
})
