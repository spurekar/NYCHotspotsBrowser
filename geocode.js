;

var geocoder;
var map;
var locInfo = [];
var index = 0;

function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(40.7903, -73.9597);
    var mapOptions = {
        zoom: 11,
        center: latlng
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function getAddress() {
    var address = document.getElementById('address').value;
    //open file of addresses
    //get address line
    //get latitude longitude
    //save info
    locInfo[index].address = address;
};

function codeAddress(address) {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        //locInfo[index].lat = results[0].geometry.location.ob;        
        //locInfo[index].lon = results[0].geometry.location.pb;        
        console.log(results[0].geometry.location);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
};

google.maps.event.addDomListener(window, 'load', initialize);
