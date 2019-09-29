// jshint esversion: 6
const express = require("express");
const bodyparser = require("body-parser");

const app = express();

const request = require("request");

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile( __dirname + "/index.html" );
});

app.post("/", function(req, res){

  var crypto = req.body.crypto;
  var fiat = req.body.fiat;

  var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  var finalURL = baseURL + crypto + fiat;

    request(finalURL, function(error, response, body){

        var data = JSON.parse(body);
        var price = data.last;

      //  console.log(price);

        res.send("<h1> Thecurrent price of " + crypto + " is " + price + " " +fiat + " </h1>");
    });

});





app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
