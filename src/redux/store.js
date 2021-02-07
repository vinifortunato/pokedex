import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import { pokemonReducer } from './modules/pokemon';

const reducers = {
  pokemon: pokemonReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, composeWithDevTools());

export default store;
