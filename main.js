// const kantoURL = 'https://pokeapi.co/api/v2/pokemon?limit=149';


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
    .catch(err => console.log(err));
}
function toPokedex(pokemon){
  const pokePic = document.querySelector('#pokePic');
  const pokeStats = document.querySelector('#pokeStats');
  const nameLi = document.createElement('li');
  const typeLi = document.createElement('li');
  // const flavorLi = document.createElement('li');
  const newImg = document.createElement('img');
  let types = '';
  
  pokePic.innerHTML = '';
  pokeStats.innerHTML = '';

  nameLi.innerText = pokemon.name;
  nameLi.classList.add('capitalize');
  for (let i = 0; i < pokemon.types.length; i++) {
    types += `${pokemon.types[i].type.name} `;
  }
  typeLi.innerText = types;
  typeLi.classList.add('capitalize');
  // flavorLi.innerText = 
  newImg.src = pokemon.sprites.front_default;

  pokeStats.appendChild(nameLi);
  pokeStats.appendChild(typeLi);
  // pokeStats.appendChild(flavorLi);
  pokePic.appendChild(newImg);

}

































// function toPokedex(info) {
//   let ul = document.createElement('ul');
//   for (let i = 0; i < info.length; i++) {
//     let li = document.createElement('li');
//     let link = document.createElement('link');

    

//     li.innerText = info[i].name;
//     li.appendChild(link);
//     // console.log(link);

//     link.src = info[i].url;
//     ul.appendChild(li);
//   }
//   document.body.appendChild(ul)
// }
