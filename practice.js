  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpnd0I8jkxLFqF4aOgBjAOr6Z7RkncgoU",
    authDomain: "kwitterd.firebaseapp.com",
    databaseURL: "https://kwitterd-default-rtdb.firebaseio.com",
    projectId: "kwitterd",
    storageBucket: "kwitterd.appspot.com",
    messagingSenderId: "374103215932",
    appId: "1:374103215932:web:64b0cc9f6f67b3f3f31839"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
 
function addUser() {

  user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
purpose : "adding user_name"
 });
  }