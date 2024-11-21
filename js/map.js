
var map; 
  Function initmap() { // here at (inimap) i am Initiating the name of the function, which is map. this ( () ) means the I'm giving it an anonymous value.  
    map = new google.maps.map(document.getElementById('map'), {
    // here i am grabbing the var map making it = a new google map which is the html code link on googlemap.html, at the end (document.getElementById('map') means im grabbing the html code with the id map
    center: {lat: -34.397, lng: 150.644}, 
    zoom:8
    //Here is obviously determining where the map should be focused and the zoom lvl.
 });
}
    
    