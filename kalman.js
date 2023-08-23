// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAVZ1O_tfpmP2zdLTCswv24CC_Wbx3SFQg",
    authDomain: "smart-helmet-b7cda.firebaseapp.com",
    projectId: "smart-helmet-b7cda",
    storageBucket: "smart-helmet-b7cda.appspot.com",
    messagingSenderId: "632159504735",
    appId: "1:632159504735:web:38734764b0a659313eceea"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase database
  var database = firebase.database();
  
  // Kalman filter variables
  var Q = 0.01; // Process noise covariance
  var R = 0.1; // Measurement noise covariance
  var x = 0; // Initial state (speed)
  var P = 1; // Initial error covariance
  
  // Function to calculate speed using a Kalman filter
  function calculateSpeed(acceleration) {
    var dt = 1; // Time interval (assumed to be 1 second)
    
    // Predict step
    var x_pred = x;
    var P_pred = P + Q;
    
    // Update step
    var K = P_pred / (P_pred + R);
    x = x_pred + K * (acceleration - x_pred);
    P = (1 - K) * P_pred;
    
    return x;
  }
  
  // Function to fetch acceleration data from Firebase
  function fetchAccelerationData() {
    database.ref('acceleration').on('value', function(snapshot) {
      var acceleration = snapshot.val();
      var speed = calculateSpeed(acceleration);
      
      console.log('Acceleration:', acceleration);
      console.log('Speed:', speed);
    });
  }
  
  // Start fetching acceleration data
  fetchAccelerationData();
  