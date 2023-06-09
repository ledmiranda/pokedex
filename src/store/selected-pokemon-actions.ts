import {
  PokemonInfoResponse,
  formatCardFromResponse,
  formatDataFromResponse,
} from '../models/pokemon';
import { SpecieResponse } from '../models/species';
import { getInfoResponse, getSpecieResponse } from '../services/pokemon';
import { pokemonActions } from './selected-pokemon-slice';

export const fetchSelectedPokemonData = (name: string) => {
  return async (dispatch: any) => {
    const fetchPokemonData = async (): Promise<
      [PokemonInfoResponse, SpecieResponse]
    > => {
      return await Promise.all([
        getInfoResponse(name),
        getSpecieResponse(name),
      ]);
    };

    const [info, specie] = await fetchPokemonData();
    const pokemonCard = formatCardFromResponse(info);
    const pokemonContent = formatDataFromResponse(info, specie);

    dispatch(
      pokemonActions.replaceSelectedPokemon({
        pokemonCard,
        pokemonContent,
      })
    );
  };
};
