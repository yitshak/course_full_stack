const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res) {
  var cityName = (req.body.cityName);
  console.log(req);

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=9c880930515448aa2b1003cdb84e9044&units=metric#"
  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weather_data = JSON.parse(data);
      const temp = weather_data.main.temp;
      const description = weather_data.weather[0].description;
      const icon = weather_data.weather[0].icon
      const imageUrl = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      console.log(imageUrl);
      res.write("<p>Weather is currently " + description +  "</p>" );
      res.write("<h1>The temprature in " + cityName + " is " + temp + " degrees</h1>");
      res.write("<img src="+imageUrl+">")
      res.send()

    })
  });
})
app.listen(3000, function(){
  console.log("Serever running on port 3000");
})
