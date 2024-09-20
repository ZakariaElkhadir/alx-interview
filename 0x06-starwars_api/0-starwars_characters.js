#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2]; // Take movieId as an argument from the terminal

if (!movieId) { // if no argument id entered will log error
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}
// url of the api
const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(movieUrl, (error, response, body) => {
  if (error) { // log error if the request fail
    console.error('Error:', error);
    return;
  }

  const movieData = JSON.parse(body);
  const characterUrls = movieData.characters;
  /**
   * Creates an array of Promises that fetch character names from given URLs.
   *
   * @constant {Promise<string>[]} characterRequests - An array of Promises, each resolving to a character name.
   * @param {string[]} characterUrls - An array of URLs to fetch character data from.
   * @returns {Promise<string>[]} An array of Promises, each resolving to a character name.
   */
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
