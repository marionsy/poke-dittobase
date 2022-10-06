const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

// Helper API function to retrieve pokemon data
const getPokemonData = async (pokemonName) => {
  let pokemon;
  try {
    const speciesData = await P.getPokemonSpeciesByName(pokemonName);
    const pokemonData = await P.getPokemonByName(pokemonName);

    pokemon = {
      name: speciesData.name,
      description: speciesData.flavor_text_entries[0].flavor_text,
      image: pokemonData.sprites.other["official-artwork"].front_default,
      ability: pokemonData.abilities[0].ability.name,
      game: pokemonData.game_indices[0].version.name,
      found: true
    }

  } catch (e) {
    console.log(e);
  }

  return pokemon;
}

module.exports = getPokemonData;