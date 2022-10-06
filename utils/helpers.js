// Fetch random image url to display on login and homepage
module.exports = {
  getRandomPokemonImage: () => {
    const pokemonId = Math.floor(Math.random() * 905) + 1; // 905 possible pokemon, not 0-indexed
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemonId +".png";
  }
};
