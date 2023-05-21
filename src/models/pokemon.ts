import { TypesColor } from './types';

export interface PokemonInfo {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  photo: string;
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
  const { id, name, height, order, weight, sprites } = data;

  return {
    id,
    name,
    height,
    order,
    weight,
    photo: sprites.front_default,
  };
};

export const formatCardFromResponse = (data: any): PokemonCard => {
  const { id, name, order, sprites, types } = data;
  const firstType: keyof typeof TypesColor = types[0].type.name;
  const color = TypesColor[firstType];

  return {
    id,
    name,
    order: `#${order.toString().padStart(4, '0')}`,
    types: types.map(({ type }: PokemonType) => type.name),
    photo: sprites.other.dream_world.front_default,
    color,
  };
};
