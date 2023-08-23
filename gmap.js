var firebaseConfig = {
    apiKey: "AIzaSyArA8F5_xr4HtOEt2vUM1fsEvkQyK4K-No",
      authDomain: "final-test-5a881.firebaseapp.com",
      databaseURL: "https://final-test-5a881-default-rtdb.firebaseio.com",
      projectId: "final-test-5a881",
      storageBucket: "final-test-5a881.appspot.com",
      messagingSenderId: "347327255678",
      appId: "1:347327255678:web:1525728c34f69cb59d742f",
      measurementId: "G-4065VSYYZW"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Fetch latitude and longitude from Firebase
  var locationRef = firebase.database().ref('/gps'); // Replace with the path to your location data in Firebase
  locationRef.once('value').then(function(snapshot) {
    var latitude = snapshot.val().latitude;
    var longitude = snapshot.val().longitude;
  
    // Create a map centered at the tracked location
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 14
    });
  
    // Create a marker for the tracked location
    var marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: "Tracked Location"
    });
  
    // Use geocoding service to get address details
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);
    geocoder.geocode({ 'latLng': latlng }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          var address = results[0].formatted_address;
          console.log("Address:", address);
        } else {
          console.log("No address found for the given coordinates.");
        }
      } else {
        console.log("Geocoder failed due to:", status);
      }
    });
  });
  