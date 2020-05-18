 var center = new google.maps.LatLng(40.71132694444444,-73.898610);
         var locationOne = new google.maps.LatLng(40.762748, -73.921438);
         var locationTwo = new google.maps.LatLng(40.739892, -73.921229);
         var locationThree = new google.maps.LatLng(40.664517, -73.909919);
         var locationFour = new google.maps.LatLng(40.715190, -73.873545);
         var locationFive = new google.maps.LatLng(40.749359, -73.914804);
         var locationSix = new google.maps.LatLng(40.754283, -73.883402);
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
position: locationOne,
map:myMap,
title: "Astoria",
animation:google.maps.Animation.DROP
});
}
          function showSecondLocation(){
 var secondMarker = new google.maps.Marker({
position: locationTwo,
map:myMap,
title: "Sunnyside",
animation:google.maps.Animation.DROP
});
}
         
 function showThirdLocation(){
 var thirdMarker = new google.maps.Marker({
position: locationThree,
map:myMap,
title: "Brownsville",
animation:google.maps.Animation.DROP
});
}
      
          function showFourthLocation(){
 var fourthMarker = new google.maps.Marker({
position: locationFour,
map:myMap,
title: "Middle Village",
animation:google.maps.Animation.DROP
});
}
             function showFifthLocation(){
 var fifthMarker = new google.maps.Marker({
position: locationFive,
map:myMap,
title: "Sunnyside gardens",
animation:google.maps.Animation.DROP
});
} 
                      function showSixthLocation(){
 var sixthMarker = new google.maps.Marker({
position: locationSix,
map:myMap,
title: "Jackson Heights",
animation:google.maps.Animation.DROP
});
}  