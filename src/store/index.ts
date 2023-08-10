import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from './pokemon-slice';
import selectedPokemonSlice from './selected-pokemon-slice';
import LoadingSlice from './loading-slice';

const store = configureStore({
  reducer: {
    pokemon: pokemonsSlice.reducer,
    selectedPokemon: selectedPokemonSlice.reducer,
    loading: LoadingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
