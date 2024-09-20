#!/usr/bin/node
const n = 20;
const requests = [];

for (let i = 1; i <= n; i++) {
  const request = new Request(`https://swapi-api.alx-tools.com/api/people/${i}/`);
  requests.push(fetch(request).then(response => response.json()));
}

Promise.all(requests)
  .then(characters => {
    characters.forEach(character => {
      console.log(character.name);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
