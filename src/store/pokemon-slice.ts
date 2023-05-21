import { createSlice } from '@reduxjs/toolkit';
import { PokemonCard } from '../models/pokemon';

export interface PokemonState {
  pokemons: PokemonCard[];
  generationId: number;
}

const initialState: PokemonState = {
  pokemons: [],
  generationId: 1,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    replacePokemonList(state, action) {
      state.pokemons = action.payload.pokemons;
      state.generationId = action.payload.generationId;
    },
  },
});

export const pokemonsActions = pokemonsSlice.actions;

export default pokemonsSlice;
