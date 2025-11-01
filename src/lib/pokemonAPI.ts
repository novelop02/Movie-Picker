// helper functions to acces de Pokemon API

const POKEMON_API = "https://pokeapi.co/api/v2/";

// getPokemonList -> get the first 151 pojemon names
export async function getPokemonList() {
        const respose = await fetch(POKEMON_API + "pokemon?limit=151&offset=0")
        const data = await respose.json();
        return data.results;
}

// getPokemon -> given a string "pikachu", get the information
export async function getPokemon(name:string){
        const respose = await fetch(POKEMON_API + "pokemon/"+name);
        const data = await respose.json();
        return data
}

//get pokemon -> {object}