import {
  PokemonCard,
  PokemonInfoResponse,
  formatCardFromResponse,
} from '../models/pokemon';
import { GenericResponse } from '../models/shared';
import { SpecieResponse } from '../models/species';

export const getPokemonsName = async (offset = 0, limit = 151) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error('There was an error');
  }

  const responseData = await response.json();
  const pokemonsInfo: GenericResponse[] = responseData.results;

  return pokemonsInfo.map((pokemon) => pokemon.name);
};

export const searchResume = async (name: string): Promise<PokemonCard> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error('There was an error');
  }

  const pokemonData = await response.json();

  return formatCardFromResponse(pokemonData);
};

export const getSpecieResponse = async (
  name: string
): Promise<SpecieResponse> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );

  if (!response.ok) {
    throw new Error('There was an error');
  }

  return await response.json();
};

export const getInfoResponse = async (
  name: string
): Promise<PokemonInfoResponse> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error('There was an error');
  }

  return await response.json();
};

export const getEvolutionChain = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('There was an error');
  }

  return await response.json();
};
