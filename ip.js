 var center = new google.maps.LatLng(40.71132694444444,-73.898610);
         var JFK = new google.maps.LatLng(40.6397511,-73.7789256);
         var JFK2 = new google.maps.LatLng(-34, 151);
         var JFK3 = new google.maps.LatLng(30, 60);
         var JFK4 = new google.maps.LatLng(-35, 150);
         var JFK5 = new google.maps.LatLng(45.71132694444444,-63.898610);
         var JFK6 = new google.maps.LatLng(42.71132694444444,-72.898610);
         var JFKmarker;
         var secondLocation;
         var thirdLocation;
         var fourthLocation;
         var fifthLocation;
         var sixthLocation;

var myMap;

 function initialize() {
 var mapOptions = {
 zoom: 12,
 center: center,
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 };
 myMap = new google.maps.Map(document.getElementById("mapCanvas"),
mapOptions);
}