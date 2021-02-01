
//ADD YOUR FIREBASE LINKS HERE
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

    function addRoom() 
    {
          room_name = document.getElementById("room_name").nodeValue;

          firebase.database().ref("/").child ("room_name").update({
           purpose :"adding room_name"  
          });
          localStorage.setItem(room_name);

          window.location = "kwitter_page.html";
          
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class= 'room_name' id = "+Room_names +  " onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;





        //ADD YOUR FIREBASE LINKS
      
      });});}
getData();

      
function redirectToRoomName(name)
{console.log(name);
      localStorage.setItem("room_name", name);
      window.locaton = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
//End code//End code//End code//End code//End code//End code//End code