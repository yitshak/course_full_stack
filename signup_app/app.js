const express = require('express')
const bodyParser = require('body-parser')


const port = process.env.PORT || 3000
const https = require('https')
const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

// const client = require("mailchimp-api-v3");
//
// client.setConfig({
//   apiKey: "af03d3824b715ea3e13f73ea267ec77c-us14",
//   server: "us14",
// });

app.post("/", function(req,res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };

  const url = "https://us14.api.mailchimp.com/3.0/lists/73cf85e35b"
  const options = {
    method: "POST",
    auth: "yitshak:af03d3824b715ea3e13f73ea267ec77c-us14"
  }

  var jsonData = JSON.stringify(data)
  const request = https.request(url,options, function(response){
    if (response.statusCode === 200){
      res.sendFile(__dirname + "/success.html")
    } else {
      res.sendFile(__dirname + "/failure.html")
    }
  })

  request.write(jsonData)
  request.end()
})

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
})

app.post("/failure", function(req,res){
  res.redirect("/");
})

app.listen(port, function() {
  console.log("Server running on port " + port);
})
