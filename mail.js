const firebaseConfig = {
    apiKey: "AIzaSyCZWC38zACOh4T-Cs8nv6a1BXF6VjtYLTk",
    authDomain: "smart-ca98c.firebaseapp.com",
    databaseURL: "https://smart-ca98c-default-rtdb.firebaseio.com",
    projectId: "smart-ca98c",
    storageBucket: "smart-ca98c.appspot.com",
    messagingSenderId: "665955011851",
    appId: "1:665955011851:web:424617443534528b6be60e"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };