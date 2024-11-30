function initMap() {
  var el = document.getElementById('canvas'); // Grabbing the canvas from the HTML code (id="canvas")
  var myLocation = new google.maps.LatLng(41.719082, -87.702080); // Original location

  // Dark color scheme styles
  var darkThemeStyles = [
    {
      "elementType": "geometry",
      "stylers": [{ "color": "#212121" }]
    },
    {
      "elementType": "labels.icon",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#757575" }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#212121" }]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [{ "color": "#757575" }]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#9e9e9e" }]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#bdbdbd" }]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#757575" }]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{ "color": "#181818" }]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#616161" }]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#1b1b1b" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{ "color": "#2c2c2c" }]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#8a8a8a" }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{ "color": "#373737" }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{ "color": "#3c3c3c" }]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [{ "color": "#4e4e4e" }]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#616161" }]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#757575" }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#000000" }]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#3d3d3d" }]
    }
  ];

  var mapOptions = {
    center: myLocation, // Centering the map on the original location
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP, // Standard roadmap view
    styles: darkThemeStyles // Apply the dark theme styles
  };

  var myMap = new google.maps.Map(el, mapOptions); // Creating the map with the specified options

  // Info window content
  var infoWindow1 = new google.maps.InfoWindow({
    content: "<div><strong>Chi-Tung Chinese Thai & Japanese Restaurant</strong><br>41.719082, -87.702080</div>"
  });

  var infoWindow2 = new google.maps.InfoWindow({
    content: "<div><strong>Gyu-Kaku Japanese BBQ</strong><br>41.892784, -87.622231</div>"
  });

  var infoWindow3 = new google.maps.InfoWindow({
    content: "<div><strong>Union Sushi + Barbeque Bar</strong><br>41.894073, -87.635429</div>"
  });

  // Marker data
  var markers = [
    {
      position: myLocation,
      title: "Chi-Tung Chinese Thai & Japanese Restaurant",
      infoWindow: infoWindow1
    },
    {
      position: { lat: 41.892784, lng: -87.622231 },
      title: "Gyu-Kaku Japanese BBQ",
      infoWindow: infoWindow2
    },
    {
      position: { lat: 41.894073, lng: -87.635429 },
      title: "Union Sushi + Barbeque Bar",
      infoWindow: infoWindow3
    }
  ];

  // Loop through marker data to create markers
  markers.forEach((data, index) => {
    var marker = new google.maps.Marker({
      position: data.position,
      map: myMap,
      title: data.title,
      animation: google.maps.Animation.DROP
    });

    // Open info window on click
    marker.addListener("click", function () {
      markers.forEach((m) => m.infoWindow.close());
      data.infoWindow.open(myMap, marker);
    });

    // Accessibility features
    google.maps.event.addDomListener(marker, "focus", function () {
      data.infoWindow.open(myMap, marker);
    });

    google.maps.event.addDomListener(marker, "keydown", function (event) {
      if (event.key === "Enter") {
        data.infoWindow.open(myMap, marker);
      }
    });

    // Accessibility: Enable tab navigation for markers
    marker.set("tabindex", index + 1);
  });
}

google.maps.event.addDomListener(window, "load", initMap);
