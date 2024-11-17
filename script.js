function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { "lat": 13.93874641455393, "lng": 121.15969531596905 },
  });

  var childhood = new google.maps.Circle({
    center:{ "lat": 13.93874641455393, "lng": 121.15969531596905  },
    radius:1500,
    strokeColor:"#FF0000",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#FF0000",
    fillOpacity:0.2,
    map: map
  });

  var marker = new google.maps.Marker({
    position: { "lat": 13.93874641455393, "lng": 121.15969531596905  },
    map: map,
  });

  var contentString = "<p> The location of where I was born, Lipa City, Batangas, Philippines</p>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
window.initMap = initMap;