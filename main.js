const kantoURL = 'https://pokeapi.co/api/v2/pokemon?limit=150';
function fetchPokemon() {
  fetch(kantoURL)
    .then(result => result.json())
    .then(kantoList => {
      console.log(kantoList);
      drawAllKanto(kantoList.results);
    })
    .catch(err => console.log(err));
}

function drawAllKanto(info) {
  let ul = document.createElement('ul');
  for (let i = 0; i < info.length; i++) {
    let li = document.createElement('li');
    let link = document.createElement('link');

    console.log(pokemonURL);

    li.innerText = info[i].name;
    li.appendChild(link);
    // console.log(link);

    link.src = info[i].url;
    ul.appendChild(li);
  }
  document.body.appendChild(ul)
}
fetchPokemon();
function fetchEach() {
  let pokemonURL = info[i].url;
  fetch(pokemonURL)
    .then(result => result.json())
    .then(pokemon => {
      console.log(pokemon);
    })
}