import { actionTypes } from './pokemonActions';

const initialState = {
  loaded: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POKEMON:
      return {
        ...state,
        loaded: [...state.loaded, action.pokemon],
      };
    case actionTypes.ADD_POKEMONS:
      return {
        ...state,
        loaded: state.loaded.concat(action.pokemons),
      };
    default:
      return state;
  }
};

export default pokemonReducer;
