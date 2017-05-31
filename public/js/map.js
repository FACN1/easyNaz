/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^_" }] */

/*  eslint-env browser  */
/* global google */

function _myMap () {
  var mapDiv = document.getElementById('googleMap')
  var mapProp = {
    center: new google.maps.LatLng(mapDiv.dataset.lat, mapDiv.dataset.lng),
    zoom: 15
  }
  var map = new google.maps.Map(mapDiv, mapProp)

  var _marker = new google.maps.Marker({
    position: new google.maps.LatLng(mapDiv.dataset.lat, mapDiv.dataset.lng),
    map: map,
    title: mapDiv.dataset.name
  })
}
