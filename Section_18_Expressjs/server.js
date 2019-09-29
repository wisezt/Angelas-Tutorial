//jshint esversion:6

const express = require("express");

const app = express(); // app is used commonly and easier for other people to understhand

app.listen(3000, function(){
  console.log("Server Started on port 3000");
  
});
