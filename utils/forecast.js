const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=13604b194e0d222bdc14bb1db6712980&query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    const { temperature: temp, feelslike: feelsLike } = body.current;
    const weather = body.current.weather_descriptions[0];

    if (error) {
      callback('Unable to connect to weather service!');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      callback(undefined, {
        weather,
        temp,
        feelsLike,
      });
    }
  });
};

module.exports = forecast;
