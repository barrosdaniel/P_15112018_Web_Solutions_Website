// Get current year for the copyright
$('#year').text(new Date().getFullYear());

// Initialize Firebase
var config = {
  apiKey: "AIzaSyACay3F1Z32C8a9WU_D0v2ODGGCNTvhH4M",
  authDomain: "digitalise-web-solutions.firebaseapp.com",
  databaseURL: "https://digitalise-web-solutions.firebaseio.com",
  projectId: "digitalise-web-solutions",
  storageBucket: "digitalise-web-solutions.appspot.com",
  messagingSenderId: "794588172348"
};
firebase.initializeApp(config);

// Reference messages colletion
var messagesRef = firebase.database().ref('messages');

// Listen for form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get form field values
  var name = getInputValues('name');
  var company = getInputValues('company');
  var email = getInputValues('email');
  var phone = getInputValues('phone');
  var message = getInputValues('message');

  saveMessage(name, company, email, phone, message);

  // Show success alert after form submission
  document.querySelector('.alert').style.display = 'block';
  // Hide success alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
  // Clear form after submission
  document.getElementById('contactForm').reset();
}

// Get form values
function getInputValues(id) {
  return document.getElementById(id).value;
}

// Save messages to Firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}