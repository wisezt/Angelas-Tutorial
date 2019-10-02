// jshint esversion: 6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
var path = require('path');


app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));



app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});


app.get("/test.html", function(req, res){
  res.sendFile(__dirname + "/test.html");
});





app.listen(3000, function(){
    console.log("This is apitest");
  console.log("Server is running on port 3000");
});
