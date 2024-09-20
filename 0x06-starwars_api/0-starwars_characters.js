#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2]; // Take movieId as an argument from the terminal

if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}

const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(movieUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const movieData = JSON.parse(body);
  const characterUrls = movieData.characters;
  const characterRequests = characterUrls.map(url => {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(body).name);
        }
      });
    });
  });

  Promise.all(characterRequests)
    .then(characters => {
      characters.forEach(character => {
        console.log(character);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});