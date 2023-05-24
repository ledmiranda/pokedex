import { TypesColor, getTypeColor } from './types';

export interface PokemonInfo {
  id: number;
  name: string;
  order: string;
  height: number;
  weight: number;
  photo: string;
  color: string;
  types?: string[];
  abilities?: string[];
  moves?: string[];
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

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export const formatFromResponse = (data: any): PokemonInfo => {
  const { id, name, height, order, weight, sprites, types } = data;
  const color = getTypeColor(types);

  return {
    id,
    name,
    height,
    weight,
    color,
    order: `#${order.toString().padStart(4, '0')}`,
    photo: sprites.front_default,
    types: types.map(({ type }: PokemonType) => type.name),
  };
};

export const formatCardFromResponse = (data: any): PokemonCard => {
  const { id, name, order, sprites, types } = data;
  const color = getTypeColor(types);

  return {
    id,
    name,
    color,
    order: `#${order.toString().padStart(4, '0')}`,
    types: types.map(({ type }: PokemonType) => type.name),
    photo: sprites.other.dream_world.front_default,
  };
};
