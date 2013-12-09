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
    
    //get address line
    codeAddress(address);
};

function codeAddress(address) {
    //var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address, 'componentRestrictions' : {administrativeArea: "NY"} }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //map.setCenter(results[0].geometry.location);
            var icon = {path:google.maps.SymbolPath.CIRCLE, scale: 4,strokeColor:'#FF0066'}
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                icon: icon
            });
        
            var obj = {
                address: address,
                lat: results[0].geometry.location.pb,
                lon: results[0].geometry.location.qb }
            locInfo.push(obj);        
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
};

google.maps.event.addDomListener(window, 'load', initialize);
