const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const location = process.argv[2];

geocode(location, (error, data) => {
  if (!location) {
    return console.log('Must provide a Location');
  }

  if (error) {
    return console.log(error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    console.log(data.location);
    console.log('Data:', forecastData);
  });
});
