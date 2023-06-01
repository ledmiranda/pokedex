import { createSlice } from '@reduxjs/toolkit';
import { PokemonCard, PokemonContent } from '../models/pokemon';

export interface SelectedPokemonState {
  pokemonCard: PokemonCard | null;
  pokemonContent: PokemonContent | null;
}

const initialState: SelectedPokemonState = {
  pokemonCard: null,
  pokemonContent: null,
};

const selectedPokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    replaceSelectedPokemon(state, action) {
      state.pokemonCard = action.payload.pokemonCard;
      state.pokemonContent = action.payload.pokemonContent;
    },
  },
});

export const pokemonActions = selectedPokemonSlice.actions;

export default selectedPokemonSlice;
