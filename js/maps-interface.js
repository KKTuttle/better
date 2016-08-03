var apiKey = require('./../.env').apiKey;
var GoogleMap = require('./../js/maps.js').googleMapsModule;

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
//
//     var newMap = new GoogleMap(lat, lng);
//
//     var initMapWrapper = newMap.initMap();
//
    $('#latitude').val('');
    $('#longitude').val('');
//     newMap.initMap(lat, lng);
//     $.get('https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMapWrapper', function(response) {
//       console.log("the response is: " + response);
//     });
  });
});






//     // $('#map')
//
//   });
// });
//
//
//   $('#cityB').click(function() {
//     var city = $('#city').val();
//   })
// });
