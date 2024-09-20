#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
  console.error("Please provide a movie ID");
  return;
}
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
    }
    const film = JSON.parse(body);
    const characters = film.characters;

    characters.forEach((characterUrl) => {
    request(characterUrl, (error, response, body) => {
      if (error) {
      console.error('Error:', error);
      return;
      }
      const character = JSON.parse(body);
      console.log(character.name);
    });
    });
})