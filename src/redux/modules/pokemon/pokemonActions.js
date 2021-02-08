export const actionTypes = {
  ADD_POKEMON: 'ADD_POKEMON',
  ADD_POKEMONS: 'ADD_POKEMONS',
};

export const addPokemon = (pokemon) => ({
  type: actionTypes.ADD_POKEMON,
  pokemon,
});

export const addPokemons = (pokemons) => ({
  type: actionTypes.ADD_POKEMONS,
  pokemons,
});
