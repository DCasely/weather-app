const request = require('request');

// WEATHER STACK URL
const url =
  'http://api.weatherstack.com/current?access_key=13604b194e0d222bdc14bb1db6712980&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    const currentTemp = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    const desc = response.body.current.weather_descriptions;

    console.log(`Weather Description: ${desc}`);
    console.log(
      `It is currently ${currentTemp} degrees out. \nAnd it feels like ${feelsLike}.`
    );
  }
});

// GEOCODE URL
const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Miami.json?&access_token=pk.eyJ1IjoiZGNhc2VseSIsImEiOiJja2U4bHpkeTIwbWV6MnJwaWpwOXp2Y2JxIn0.CNfAJjaM4LO2cTN4Rq6LYA&limit=1
`;

request({ url: mapboxUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to service.');
  } else if (response.body.error || !response.body.features[0]) {
    console.log('UNABLE TO FIND LOCATION');
  } else {
    const location = response.body.features[0].place_name;
    const coordinates = response.body.features[0].geometry.coordinates;

    const latitude = coordinates[0];
    const longitude = coordinates[1];

    console.log(location);
    console.log(coordinates);

    console.log(latitude);
    console.log(longitude);
  }
});
