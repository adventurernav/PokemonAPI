const pokemonForm = document.querySelector('#pokemonForm');
pokemonForm.addEventListener('submit', fetchPokemon)
let singleNum;
function fetchPokemon(e) {
  e.preventDefault();
  let input = document.querySelector('#userInput');
  let singleMan = input.value;
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${singleMan}/`;
   fetch(baseURL)
    .then(result => result.json())
    .then(data => {
      console.log(data);
      toPokedex(data);
    })
    .catch(err => {
      console.log(err);
      alert('Pokemon not found. Please try again.');});
}
function toPokedex(pokemon){
  const pokePic = document.querySelector('#pokePic');
  const pokeStats = document.querySelector('#pokeStats');
  const numLi = document.createElement('li')
  const nameLi = document.createElement('li');
  const typeLi = document.createElement('li');
  const newImg = document.createElement('img');
  let types = '';
  pokePic.innerHTML = '';
  pokeStats.innerHTML = '';
  numLi.innerText = '#' + pokemon.id;
  nameLi.innerText = pokemon.name;
  nameLi.classList.add('capitalize');
  for (let i = 0; i < pokemon.types.length; i++) {
    types += `${pokemon.types[i].type.name} `;}
  typeLi.innerText = `Types: ${types}`;
  typeLi.classList.add('capitalize');
  newImg.src = pokemon.sprites.front_default;
  pokeStats.appendChild(numLi);
  pokeStats.appendChild(nameLi);
  pokeStats.appendChild(typeLi);
  pokePic.appendChild(newImg);
}