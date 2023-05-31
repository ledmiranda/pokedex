import { GenericResponse } from './shared';

export enum TypesColor {
  grass = '#48d0b0',
  fire = '#fb6c6c',
  water = '#609fb5',
  bug = '#c3ce75',
  flying = '#bab0d5',
  normal = '#c2c2a1',
  poison = '#7c538c',
  electric = '#ffd86f',
  ground = '#b1736c',
  fairy = '#f469a9',
  fighting = '#d6b591',
  psychic = '#9b7fa6',
  rock = '#a6aab6',
  steel = '#ccccde',
  ice = '#7fccec',
  dragon = '#f9be00',
  ghost = '#735797',
}

export const getTypeColor = (
  types: {
    type: GenericResponse;
  }[]
) => {
  const firstType = types[0].type.name;
  return TypesColor[firstType as keyof typeof TypesColor];
};
