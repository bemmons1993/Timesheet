

var config = {
  apiKey: "AIzaSyDitAXjuCRaclQJVq-u8Lj5hXKu376wo0Y",
  authDomain: "wisc-lc-cd1c2.firebaseapp.com",
  databaseURL: "https://wisc-lc-cd1c2.firebaseio.com",
  projectId: "wisc-lc-cd1c2",
  storageBucket: "wisc-lc-cd1c2.appspot.com",
  messagingSenderId: "489159208387",
  appId: "1:489159208387:web:ce53409cfb3caaa2e96176",
  measurementId: "G-2MK45JTMTD"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#adduser").on("click", function (event) {
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

  });

  $("#name-input").val("");
  $("#role-input").val("");
  $("#date-input").val("");
  $("#rate-input").val("");

  database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().rate);

    var name = childSnapshot.val().name;
    var role = childSnapshot.val().role;
    var startDate = childSnapshot.val().startDate;
    var rate = childSnapshot.val().rate;
    var billed = 0;
    var months = 0;

    $("#table-emp").append("<tr><td>" + name + "</td><td>" + role + "</td><td>" + startDate + "</td><td>" + months + "</td><td>" + rate + "</td><td>" + billed + "</td></tr>");


  });

});

