import {
  PokemonInfoResponse,
  formatCardFromResponse,
  formatDataFromResponse,
  formatEvolutionChainInfo,
} from '../models/pokemon';
import { SpecieResponse } from '../models/species';
import {
  getEvolutionChain,
  getInfoResponse,
  getSpecieResponse,
} from '../services/pokemon';
import { loadingActions } from './loading-slice';
import { pokemonActions } from './selected-pokemon-slice';

export const fetchSelectedPokemonData = (name: string) => {
  return async (dispatch: any) => {
    const fetchPokemonData = async (): Promise<
      [PokemonInfoResponse, SpecieResponse]
    > => {
      dispatch(loadingActions.setIsLoading({ isLoading: true }));

      return await Promise.all([
        getInfoResponse(name),
        getSpecieResponse(name),
      ]);
    };

    const fetchEvolutionChain = async (url: string): Promise<any> => {
      dispatch(loadingActions.setIsLoading({ isLoading: true }));

      return await getEvolutionChain(url);
    };

    const [info, specie] = await fetchPokemonData();
    const evolutions = await fetchEvolutionChain(specie.evolution_chain.url);
    const pokemonCard = formatCardFromResponse(info);
    const pokemonContent = formatDataFromResponse(info, specie);
    const pokemonChainEvolution = formatEvolutionChainInfo(evolutions.chain);

    dispatch(
      pokemonActions.replaceSelectedPokemon({
        pokemonCard,
        pokemonContent,
        pokemonChainEvolution,
      })
    );
    dispatch(loadingActions.setIsLoading({ isLoading: false }));
  };
};
