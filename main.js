const pokemonCard = document.querySelector(".pokemon-card");
const searchInput = document.querySelector("[data-search");

searchInput.addEventListener("input", (e) => {
    searchString = e.target.value;
});


const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}` // ${i} iterates through 1-151 and makes the api call for each 1-151 pokemon
        promises.push(fetch(url).then((res) => res.json()));
        //fetch information 
        //returns a promise, in that promise define callback
        //after make request and get response, converts response to json
    }

    Promise.all(promises).then( (results) => {
        const pokemon = results.map((data) => ({
            name: data.name, //name of pokemon
            id: data.id, //id of pokemon
            picture: data.sprites['front_default'], //default sprite
            type: data.types.map(type => type.type.name).join(" / ") //returns the types from array to string
        }));
        createPokemonCard(pokemon);
    });
};

const createPokemonCard = (some_pokemon) => {
    for (let j = 0; j <= some_pokemon.length - 1; j++){
        const card = document.createElement("div");
        card.classList.add("pokemon-block")

        const spirteContainer = document.createElement("div");
        spirteContainer.classList.add("img-container");

        const sprite = document.createElement("img");
        sprite.src = some_pokemon[j].picture;

        spirteContainer.appendChild(sprite);

        const name = document.createElement("p");
        name.classList.add("poke_name");
        name.textContent = some_pokemon[j].id+ ". " + (some_pokemon[j].name).charAt(0).toUpperCase() + (some_pokemon[j].name).slice(1);
        if (j == 121) {
            name.textContent = some_pokemon[j].id+ ". " + (some_pokemon[j].name.charAt(0).toUpperCase() + some_pokemon[j].name.slice(1,3)) + some_pokemon[j].name.charAt(3).toUpperCase() + some_pokemon[j].name.slice(4);
        }; //Mr-mime -> Mr-Mime; 

        const type = document.createElement("p");
        type.classList.add("poke_type");
        type.textContent = "Type: " + some_pokemon[j].type.toUpperCase();

        card.appendChild(spirteContainer);
        card.appendChild(name);
        card.appendChild(type);

        pokemonCard.appendChild(card);
    }
};

fetchPokemon();

