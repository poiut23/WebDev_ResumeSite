function init() {
  var el = document.getElementById('canvas'); //this is grabbing the canvas from the html code (id="canvas")
  var myLocation = new google.maps.LatLng(41.83517, -87.627130); //this is dropping the map inside the canvas
  
  var mapOptions = { //you want your map to be centered on your location so thats what i am doing below. after that, you need a zoom, your map needs to have a type and the type i have below is SATELLITE
    center: myLocation,
    zoom:18,
    mapTypeId: google.maps.MapTypeId.SATELLITE, 
    
    mapTypeControlOptions: { //This is Positioning for the control panel on the map
      position: google.maps.ControlPosition.BOTTOM_CENTER
  }
}; 

var myMap = new google maps.map(el, mapOptions); 

var marker = new google.maps.Marker({
    position: myLocation, 
    map: myMap, 
    animation: google.maps.Animation.drop,
    icon: 'iit-icon.png'
});

var contentString = '<h1> </h1><p> </p>' 

var infowindow = new google.maps.infowindow ({
    content: contentString
}); 

google.maps.event.addListener(marker, 'mouseover', function() {
  infowindow.open(myMap, marker); 
});


}



/*var map; 
  Function initmap() {  here at (inimap) i am Initiating the name of the function, which is map. this ( () ) means the I'm giving it an anonymous value. 
  
   map = new google.maps.map(document.getElementById('map'), {
     here i am grabbing the var map making it = a new google map which is the html code link on googlemap.html, at the end (document.getElementById('map') means im grabbing the html code with the id map
     
    center: {lat: -34.397, lng: 150.644}, 
    zoom:8
    Here is obviously determining where the map should be focused and the zoom lvl.
 });
}
*/   
google.maps.event.addDomListener(window, 'load', init); 