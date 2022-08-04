const pokemonCard = document.querySelector(".pokemon-card");

const fetchPokemon = () => {
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}` // ${i} iterates through 1-151 and makes the api call for each 1-151 pokemon
        fetch(url) // fetch information 
            .then((res) => { //returns a promise, in that promise define callback
                return res.json(); //after make request and get response, converts response to json
            })
            .then( (data) => { //returns another promise to get our data and then print out our data below
                const pokemon = { //creates pokemon object with the specific data below
                    name: data.name, //name of pokemon
                    id: data.id, //id of pokemon
                    image: data.sprites['front_default'], //default sprite
                    type: data.types.map(type => type.type.name).join(",") //returns the types from array to string
                };
                console.log(pokemon);
                createPokemonCard(pokemon);
            });
    }
};

const createPokemonCard = (some_pokemon) => {

    const card = document.createElement("div");
    card.classList.add("pokemon-block")

    const spirteContainer = document.createElement("div");
    spirteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = some_pokemon.image;

    spirteContainer.appendChild(sprite);

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = some_pokemon.name;

    card.appendChild(spirteContainer);
    card.appendChild(name);

    pokemonCard.appendChild(card);
};


fetchPokemon();

