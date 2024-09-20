#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
  console.error("Please provide a movie ID");
  process.exit(1);
}
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
    }
    const film = JSON.parse(body);
    const characters = film.characters;
    const characterRequests = characters.map(url => {
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