
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(47.3, 7.9), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}


