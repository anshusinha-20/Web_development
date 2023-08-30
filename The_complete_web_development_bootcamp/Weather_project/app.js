const express = require('express');
const app = express();
const https = require('https');

app.get('/', function(req, res) {
  res.sendFile(__dirname, "/index.html");
});

app.post('/', function(req, res) {
  console.log('Post reqeust received');
});

// const lat = 21.8554;
// const lon = 84.0062;
// const api_id = '2c7a6cd8fd372cf4b675c1e6059f1863';
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_id}`;
//
// https.get(url, function(response) {
//   console.log(response.statusCode);
//
//   response.on('data', function(data) {
//     // console.log(data);
//     const weatherData = JSON.parse(data);
//     console.log(weatherData);
//     const temp = Math.round(weatherData.main.temp - 273.15);
//     // console.log(temp);
//     const weatherDescription = weatherData.weather[0].description;
//     // console.log(weatherDescription);
//     // const icon = weatherData.weather[0].icon;
//     // const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
//
//     res.write(`<h1>The temperature in Jharsuguda is ${temp} degrees Celcius.</h1>`);
//     res.write(`<h2>The weather is currenly ${weatherDescription}.</h2>`);
//     res.send();
//   });
// });

app.listen(3000, function() {
  console.log('The server is running on port 3000');
});
