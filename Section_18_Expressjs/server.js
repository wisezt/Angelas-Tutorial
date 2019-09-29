//jshint esversion:6

const express = require("express");

const app = express(); // app is used commonly and easier for other people to understhand


app.get("/", function(request, response){ // rep, res

  //console.log(request);
  //console.log(response);
  response.send("<h1>Hello World</h1>");



});




app.listen(3000, function(){
  console.log("Server Started on port 3000");

});
