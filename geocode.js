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
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'locations.txt', false);
    xhr.send(null);    
    var file = xhr.responseText.split('/n');

    /*fs.readFile('locations.txt', function(err, f) {
        var file = f.toString().split('/n');
        console.log(file[0]);        
    });*/
        //get address line
        codeAddress(address);
};

function codeAddress(address) {
    //var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address, 'componentRestrictions' : {administrativeArea: "NY"} }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        
            var obj = {
                address: address,
                lat: results[0].geometry.location.ob,
                lon: results[0].geometry.location.pb }
            locInfo.push(obj);        
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
};

google.maps.event.addDomListener(window, 'load', initialize);
