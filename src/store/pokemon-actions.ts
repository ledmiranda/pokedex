import { Generations } from '../models/generations';
import { getPokemonsName, searchResume } from '../services/pokemon';
import { pokemonsActions } from './pokemon-slice';

export const fetchPokemonData = (generationId = 1) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (dispatch: any) => {
    const fetchPokemonsName = async () => {
      const selectedGeneration = Generations.find(
        ({ id }) => id === generationId
      );
      const pokemonsName = await getPokemonsName(
        selectedGeneration?.offset,
        selectedGeneration?.limit
      );

      return pokemonsName;
    };

    const fetchPokemonList = async (pokemonsName: string[]) => {
      const pokemonList = await Promise.all(
        pokemonsName.map(async (pokemon) => {
          const pokemonCard = await searchResume(pokemon);
          return pokemonCard;
        })
      );

      return pokemonList;
    };

    const pokemonsName = await fetchPokemonsName();
    const pokemonList = await fetchPokemonList(pokemonsName);
    dispatch(
      pokemonsActions.replacePokemonList({
        pokemons: pokemonList,
        generationId: generationId,
      })
    );
  };
};
