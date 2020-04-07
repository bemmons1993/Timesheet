

  var config = {
    apiKey: "AIzaSyCkw9nbKyw0ppl-IlkShjbSABOIFLf0Q6w",
    authDomain: "test-9c8c7.firebaseapp.com",
    databaseURL: "https://test-9c8c7.firebaseio.com",
    projectId: "test-9c8c7",
    storageBucket: "test-9c8c7.appspot.com",
    messagingSenderId: "696149474505",
    appId: "1:696149474505:web:046b90b57e1a24f1502118",
    measurementId: "G-CH1MPVVSJT"
  };

    firebase.initializeApp(config);

    var database = firebase.database();

$("#adduser").on("click", function(event) {
    event.preventDefault();

var name = $("#name-input").val().trim(); 
var role = $("#role-input").val().trim();
var startDate = $("#date-input").val().trim(); 
var rate = $("#rate-input").val().trim(); 

database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    rate: rate,

})

});

