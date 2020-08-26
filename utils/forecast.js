const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=13604b194e0d222bdc14bb1db6712980&query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!');
    } else if (response.body.error) {
      callback('Unable to find location');
    } else {
      callback(undefined, {
        weather: response.body.current.weather_descriptions[0],
        current_temp: response.body.current.temperature,
        feels_like: response.body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;
