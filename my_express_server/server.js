const express = require("express");
const app = express()

app.get("/", function(req,res){
  console.log(req);
  res.send("<h1>Hello world!!</h1>")
})

app.get("/contact", function(req,res){
  console.log(req);
  res.send("Contact me at yitshakyarom@gmail.com")
})

app.get("/about", function(req,res){
  console.log(req);
  res.send("I am yitzik this is my web server. I love BEER and cheese..")
})

app.listen(3000, function() {
  console.log("Server started on port 3000")
})
