import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from './pokemon-slice';
import selectedPokemonSlice from './selected-pokemon-slice';

const store = configureStore({
  reducer: {
    pokemon: pokemonsSlice.reducer,
    selectedPokemon: selectedPokemonSlice.reducer,
  },
});

export type RooState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
