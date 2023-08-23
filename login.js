// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the authentication service
var auth = firebase.auth();

// Get the login form element
var loginForm = document.getElementById('loginForm');

// Get the success message element
var loginSuccessMessage = document.getElementById('loginSuccessMessage');

// Add submit event listener to the login form
loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get user input
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Sign in with email and password
  auth.signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Login successful
      var user = userCredential.user;
      console.log('Logged in:', user.uid);

      // Show the success message
      loginSuccessMessage.style.display = 'block';

      // Optional: Redirect to a different page after successful login
      // window.location.href = 'dashboard.html';
    })
    .catch(function(error) {
      // Login failed
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Login error:', errorCode, errorMessage);
      // Display an error message to the user, e.g., by showing an error div on the page
    });
});
