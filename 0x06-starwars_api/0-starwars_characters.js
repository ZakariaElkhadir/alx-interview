#!/usr/bin/node
const movieId = process.argv[2]; // Take movieId as an argument from the terminal
if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}
const movieRequest = new Request(`https://swapi-api.alx-tools.com/api/films/${movieId}/`);

fetch(movieRequest)
  .then(response => response.json())
  .then(movieData => {
    const characterUrls = movieData.characters;
    const characterRequests = characterUrls.map(url => fetch(url).then(response => response.json()));

    return Promise.all(characterRequests);
  })
  .then(characters => {
    characters.forEach(character => {
      console.log(character.name);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });