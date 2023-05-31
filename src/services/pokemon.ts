import {
  PokemonCard,
  PokemonInfo,
  PokemonItem,
  formatCardFromResponse,
  formatFromResponse,
} from '../models/pokemon';
import { formatSpecieFromResponse } from '../models/species';

export const getPokemonsName = async (offset = 0, limit = 151) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error('There was an error');
  }

  const responseData = await response.json();
  const pokemonsInfo: PokemonItem[] = responseData.results;

  return pokemonsInfo.map((pokemon) => pokemon.name);
};

export const search = async (name: string): Promise<PokemonInfo> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error('There was an error');
  }

  const pokemondata = await response.json();

  return formatFromResponse(pokemondata);
};

export const searchResume = async (name: string): Promise<PokemonCard> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error('There was an error');
  }

  const pokemonData = await response.json();

  return formatCardFromResponse(pokemonData);
};

export const getSpecieInfo = async (id: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  if (!response.ok) {
    throw new Error('There was an error');
  }

  const specieData = await response.json();

  return formatSpecieFromResponse(specieData);
};
