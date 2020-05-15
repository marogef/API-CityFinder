 var center = new google.maps.LatLng(40.71132694444444,-73.898610);
         var JFK = new google.maps.LatLng(40.6397511,-73.7789256);
         var JFK2 = new google.maps.LatLng(40.725192, -73.988908);
         var JFK3 = new google.maps.LatLng(40.736364, -74.002043);
         var JFK3 = new google.maps.LatLng(40.709824, -74.005288);
         var JFK4 = new google.maps.LatLng(40.715321, -74.000052);
         var JFK5 = new google.maps.LatLng(40.736639, -73.990336);
         var JFK6 = new google.maps.LatLng(40.723563, -74.001344);
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
       function showJFK(){
 var JFKmarker = new google.maps.Marker({
position: JFK,
map:myMap,
title: "JFK Internatioan Airport",
animation:google.maps.Animation.DROP
});
}
          function showSecondLocation(){
 var secondMarker = new google.maps.Marker({
position: JFK2,
map:myMap,
title: "JFK Internatioan Airport",
animation:google.maps.Animation.DROP
});
}
         
 function showThirdLocation(){
 var thirdMarker = new google.maps.Marker({
position: JFK3,
map:myMap,
title: "JFK Internatioan Airport",
animation:google.maps.Animation.DROP
});
}
      
          function showFourthLocation(){
 var fourthMarker = new google.maps.Marker({
position: JFK4,
map:myMap,
title: "JFK Internatioan Airport",
animation:google.maps.Animation.DROP
});
}
             function showFifthLocation(){
 var fifthMarker = new google.maps.Marker({
position: JFK5,
map:myMap,
title: "JFK Internatioan Airport",
animation:google.maps.Animation.DROP
});
} 
                      function showSixthLocation(){
 var sixthMarker = new google.maps.Marker({
position: JFK6,
map:myMap,
title: "JFK Internatioan Airport",
animation:google.maps.Animation.DROP
});
}  