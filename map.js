var map;
function initialize() {
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(40.7903, -73.9597)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

