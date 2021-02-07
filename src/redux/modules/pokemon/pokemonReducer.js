import { actionTypes } from './pokemonActions';

const initialState = {
  selected: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_POKEMON:
      return {
        ...state,
        selected: action.pokemon,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
