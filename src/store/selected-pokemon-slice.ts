import { createSlice } from '@reduxjs/toolkit';
import {
  PokemonCard,
  PokemonContent,
  PokemonEvolution,
} from '../models/pokemon';

export interface SelectedPokemonState {
  pokemonCard: PokemonCard | null;
  pokemonContent: PokemonContent | null;
  pokemonChainEvolution: PokemonEvolution[] | null;
}

const initialState: SelectedPokemonState = {
  pokemonCard: null,
  pokemonContent: null,
  pokemonChainEvolution: null,
};

const selectedPokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    replaceSelectedPokemon(state, action) {
      state.pokemonCard = action.payload.pokemonCard;
      state.pokemonContent = action.payload.pokemonContent;
      state.pokemonChainEvolution = action.payload.pokemonChainEvolution;
    },
  },
});

export const pokemonActions = selectedPokemonSlice.actions;

export default selectedPokemonSlice;
