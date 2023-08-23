// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCdg9xwNmWgJfknY9rLOmIjAEdYO5m2U94",
        authDomain: "authentication-95cdd.firebaseapp.com",
        databaseURL: "https://authentication-95cdd-default-rtdb.firebaseio.com",
        projectId: "authentication-95cdd",
        storageBucket: "authentication-95cdd.appspot.com",
        messagingSenderId: "7386052874",
        appId: "1:7386052874:web:34e327603373a88200e2f3"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Get reference to the signup form
  var signupForm = document.getElementById("signupForm");
  
  // Add event listener for form submission
  signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user input
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
  
    // Create a new user in the database
    firebase.database().ref('users').push({
      name: name,
      email: email,
      password: password
    }).then(function() {
      alert("Signup successful!");
      signupForm.reset(); // Clear form
    }).catch(function(error) {
      alert("Signup failed: " + error.message);
    });
  });
  