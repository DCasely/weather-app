const request = require('request');
const geocode = require('./utils/geocode');

const forecast = require('./utils/forecast');

geocode('Miami', (error, data) => {
  console.log('GEOCODE');
  console.log('============');
  console.log('Error', error);
  console.log('Data', data);
});

forecast(25.7743, -80.1937, (error, data) => {
  console.log('FORECAST');
  console.log('============');
  console.log('Error', error);
  console.log('Data', data);
});
