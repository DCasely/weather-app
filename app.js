const request = require('request');

// WEATHER STACK URL
const url =
  'http://api.weatherstack.com/current?access_key=13604b194e0d222bdc14bb1db6712980&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);

  console.log(data.current);
});
