//jshint esversion:6

const express = require("express");

const app = express(); // app is used commonly and easier for other people to understhand

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));



app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

})




app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The Result is " + result);

});

app.get("/bmiCalculator", function(req, res) {

  res.sendFile(__dirname + "/bmiCalculator.html");

})


app.post("/bmiCalculator", function(req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = weight / Math.pow(height, 2);

  res.send("Your BMI is " + result);
});


app.listen(3000, function() {
  console.log("Server Started on port 3000");

});
