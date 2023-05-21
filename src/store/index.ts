import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from './pokemon-slice';

const store = configureStore({
  reducer: {
    pokemon: pokemonsSlice.reducer,
  },
});

export type RooState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
