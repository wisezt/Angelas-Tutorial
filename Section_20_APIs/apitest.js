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
  var urlBase = "https://apiv2.bitcoinaverage.com/convert/global?";
  var url = urlBase + crypto + fiat;
  var amount = req.body.amount;


  var options = {
    url: urlBase,
    method: "GET",
    qs: {
      from:crypto,
      to: fiat,
      amount: amount
    }

  }


  request(options, function(error, response, body){
    console.log(error);
    console.log("body: " + body);

    var data = JSON.parse(body);
    var price = data.price;
//  var currentDate = data.display_timestamp;
//    res.write("<h1>The current data is " + currentDate + "</h1>");
    res.write("<h1>"  + " " + crypto + " = " +  price + " " + fiat + "</h1>");
    res.send();
  });


});





app.listen(3000, function(){
    console.log("This is apitest");
  console.log("Server is running on port 3000");
});
