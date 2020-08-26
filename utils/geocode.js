const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?&access_token=pk.eyJ1IjoiZGNhc2VseSIsImEiOiJja2U4bHpkeTIwbWV6MnJwaWpwOXp2Y2JxIn0.CNfAJjaM4LO2cTN4Rq6LYA&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    const latitude = body.features[0].geometry.coordinates[1];
    const longitude = body.features[0].geometry.coordinates[0];
    const location = body.features[0].place_name;

    if (error) {
      callback('Unable to connect to location services!');
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.');
    } else {
      callback(undefined, {
        latitude,
        longitude,
        location,
      });
    }
  });
};

module.exports = geocode;
