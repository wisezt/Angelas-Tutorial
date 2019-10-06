// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// add ejs
// set the view engine to ejs
app.set('view engine', 'ejs');



app.get("/", function(req, res) {

  //res.send("Hello");
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

var day = today.toLocaleDateString("en-US", options);
console.log(day);





  //
  // var currentDay = today.getDay();
  // var day = "";
  //
  //
  //
  // switch (currentDay) {
  //   case 1:
  //     day = "Monday";
  //   break;
  //   case 2:
  //     day = "Tuesday";
  //   break;
  //   case 3:
  //     day = "Webnesday";
  //   break;
  //   case 4:
  //     day = "Thursday";
  //   break;
  //   case 5:
  //     day = "Frieday";
  //   break;
  //   case 6:
  //     day = "Saturday";
  //   break;
  //   case 0:
  //     day = "Sunday";
  //   break;
  //   defualt:
  //   console.log("Error: current day is equal to: " +  currentDay);
  //
  // }





  // views fold is default
  res.render("list", {
    theDay: day
  });







});


app.listen(3000, function() {

  console.log("Server started on port 3000");


});
