// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCmL2vXd85t0G2UyihRoKdGDyc0vWjNjV4",
    authDomain: "chat-box-8d378.firebaseapp.com",
    databaseURL: "https://chat-box-8d378-default-rtdb.firebaseio.com",
    projectId: "chat-box-8d378",
    storageBucket: "chat-box-8d378.appspot.com",
    messagingSenderId: "263652707469",
    appId: "1:263652707469:web:00bc0dd8daa16e6effa6c4",
    measurementId: "G-YHM1ZW2JTH"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "chat_room.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "chat_room.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}