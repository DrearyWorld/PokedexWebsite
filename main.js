console.log("Hello World");

const fetchPokemon = () => {
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}` // ${i} iterates through 1-151 and makes the api call for each 1-151 pokemon
        fetch(url) // fetch information 
            .then((res) => { //returns a promise, in that promise define callback
                return res.json(); //after make request and get response, converts response to json
            })
            .then( (data) => { //returns another promise to get our data and then print out our data below
                console.log(data);
                const pokemon = { //creates pokemon object with the specific data below
                    name: data.name, //name of pokemon
                    id: data.id, //id of pokemon
                    image: data.sprites['front_default'], //default sprite
                    type: data.types.map(type => type.type.name).join(",") //COME BACK TO THIS MAD CONFUSED
                };
                console.log(pokemon);
            });
    }
};

fetchPokemon();

