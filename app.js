const request = require('request');

// WEATHER STACK URL
const url =
  'http://api.weatherstack.com/current?access_key=13604b194e0d222bdc14bb1db6712980&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  const currentTemp = response.body.current.temperature;
  const feelsLike = response.body.current.feelslike;
  const desc = response.body.current.weather_descriptions;

  console.log(`Weather Description: ${desc}`);
  console.log(
    `It is currently ${currentTemp} degrees out. \nAnd it feels like ${feelsLike}.`
  );
});
