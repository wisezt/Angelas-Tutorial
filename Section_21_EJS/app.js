// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// add ejs
// set the view engine to ejs
app.set('view engine', 'ejs');



app.get("/", function(req, res){

  //res.send("Hello");
  var today = new Date(0);
  var currentDay = today.getDay();
  var day = "";


  if ( currentDay === 6  || currentDay === 0 ){
    day = "Weekend";


  } else {
    day = "Weekday";


  }

  // views fold is default
  res.render( "list", {theDay: day} );







});


app.listen(3000, function(){

  console.log("Server started on port 3000");


});
