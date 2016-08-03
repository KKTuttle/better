var apiKey = require('./../.env').apiKey;
var GoogleMap = require('./../js/maps.js').googleMapModule;

// our version
// <div id="map"></div>
// <script>
//   function initMap() {
//     // Create a map object and specify the DOM element for display.
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       scrollwheel: false,
//       zoom: 8
//     });
//   }
//
// </script>
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
// async defer></script>

$(document).ready(function() {
  $('#llB').click(function() {
    var lat = parseInt($('#latitude').val());
    var lng = parseInt($('#longitude').val());
//sets lat and lng empty after click
    // $('#latitude').val('');
    // $('#longitude').val('');

    var myOptions = {
      zoom : 10,
      center : {lat: lat, lng: lng},
      rotateControl: true
      scaleControl: true
      fullscreenControl: true
      mapTypeId : google.maps.MapTypeId.HYBRID  //toggle between map and satellite
    };
    var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  });
  $('#cityB').click(function() {
    var city = $('#city').val();


    // 'https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters'
    $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=' + apiKey).then(function(response) {
          console.log(response);

    }).fail(function(error) {
          $('#map').text(error.responseJSON.message);
    });
  });
});
