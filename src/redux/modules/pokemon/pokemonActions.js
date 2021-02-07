export const actionTypes = {
  SELECT_POKEMON: 'SELECT_POKEMON',
};

export const selectPokemon = (pokemon) => ({
  type: actionTypes.SELECT_POKEMON,
  pokemon,
});
