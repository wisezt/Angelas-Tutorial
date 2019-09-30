// jshint esversion: 6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");


app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){

  console.log(req.body.crypto);

  var crypto =req.body.crypto;
  var fiat = req.body.fiat;
  var urlBase = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  var url = urlBase + crypto + fiat;






  request(url, function(error, response, body){

    var data = JSON.parse(body);
    var price = data.last;
  var currentDate = data.display_timestamp;
    res.write("<h1>The current data is " + currentDate + "</h1>");
    res.write("<h1>This is the price convert from " + crypto + " to " + fiat + " : "  + price + "</h1>");
    res.send();
  });


});





app.listen(3000, function(){
    console.log("This is apitest");
  console.log("Server is running on port 3000");
});
