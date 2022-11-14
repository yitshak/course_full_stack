const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req,res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight/(height*height);

  res.send("You BMI is " + bmi);
})

app.listen(8080,function(){
  console.log("Server is listening to port 8080")
})
