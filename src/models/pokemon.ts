import { GenericResponse } from './shared';
import { Stat } from './stats';
import { getTypeColor } from './types';

export interface PokemonInfo {
  id: number;
  abilities: string[];
  baseExperience: number;
  height: number;
  moves: string[];
  name: string;
  order: string;
  photo: string;
  stats: Stat[];
  weight: number;
  types: string[];
  color: string;
}

interface PokemonInfoResponse {
  abilities: {
    ability: GenericResponse;
    is_hidden: boolean;
    slot: 1;
  }[];
  base_experience: number;
  height: number;
  id: number;
  moves: {
    move: GenericResponse;
  }[];
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: GenericResponse;
  }[];
  types: {
    type: GenericResponse;
  }[];
  weight: number;
}

export interface PokemonCard {
  id: number;
  name: string;
  order: string;
  types: string[];
  photo: string;
  color: string;
}

export interface PokemonItem {
  name: string;
  url: string;
}

export const formatFromResponse = (data: PokemonInfoResponse): PokemonInfo => {
  const {
    id,
    name,
    height,
    weight,
    sprites,
    types,
    abilities,
    base_experience,
    moves,
    stats,
  } = data;

  return {
    id,
    name,
    height,
    weight,
    color: getTypeColor(types),
    order: `#${id.toString().padStart(4, '0')}`,
    photo: getPhoto(sprites),
    abilities: abilities.map((ability) => ability.ability.name),
    baseExperience: base_experience,
    moves: moves.map((move) => move.move.name),
    stats: stats.map(({ base_stat, stat }) => ({
      baseStat: base_stat,
      name: stat.name,
    })),
    types: types.map(({ type }) => type.name),
  };
};

export const formatCardFromResponse = (
  data: PokemonInfoResponse
): PokemonCard => {
  const { id, name, sprites, types } = data;

  return {
    id,
    name,
    color: getTypeColor(types),
    order: `#${id.toString().padStart(4, '0')}`,
    types: types.map(({ type }) => type.name),
    photo: getPhoto(sprites),
  };
};

const getPhoto = (sprites: {
  other: { dream_world: { front_default: string } };
}): string => {
  return sprites.other.dream_world.front_default;
};
