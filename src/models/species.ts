import { GenericResponse } from './shared';

interface Gender {
  male: number;
  female: number;
}

export interface Specie {
  id: number;
  nameSpecie: string;
  description: string;
  habitat: string;
  captureRatio: number;
  baseHappiness: number;
  color: string;
  eggGroups: string[];
  evolutionChainUrl: string;
  gender: Gender;
  growthRate: string;
  hatchCounter: number;
  shape: string;
  generation: string;
}

export interface SpecieResponse {
  id: number;
  base_happiness: number;
  capture_rate: number;
  color: GenericResponse;
  egg_groups: GenericResponse[];
  evolution_chain: { url: string };
  flavor_text_entries: {
    flavor_text: string;
    language: GenericResponse;
    version: GenericResponse;
  }[];
  gender_rate: number;
  genera: { genus: string; language: GenericResponse }[];
  generation: GenericResponse;
  growth_rate: GenericResponse;
  habitat: GenericResponse;
  hatch_counter: number;
  shape: GenericResponse;
}

export const formatSpecieFromResponse = (data: SpecieResponse): Specie => {
  const {
    id,
    base_happiness,
    capture_rate,
    color,
    egg_groups,
    evolution_chain,
    gender_rate,
    genera,
    generation,
    growth_rate,
    habitat,
    hatch_counter,
    shape,
    flavor_text_entries,
  } = data;

  return {
    id,
    baseHappiness: base_happiness,
    captureRatio: capture_rate,
    color: color.name,
    eggGroups: egg_groups.map(({ name }) => name),
    evolutionChainUrl: evolution_chain.url,
    gender: getGender(gender_rate),
    generation: generation.name,
    growthRate: growth_rate.name,
    habitat: habitat.name,
    hatchCounter: hatch_counter,
    shape: shape.name,
    nameSpecie: getSpecieName(genera),
    description: getDescription(flavor_text_entries),
  };
};

const getGender = (genderRatio: number): Gender => {
  const femaleRatio = 12.5 * genderRatio;
  const maleRatio = 12.5 * (8 - genderRatio);

  return {
    male: maleRatio,
    female: femaleRatio,
  };
};

const getSpecieName = (
  genera: {
    genus: string;
    language: GenericResponse;
  }[]
): string => {
  const specie = genera.find(({ language }) => language.name === 'en');
  return specie?.genus ?? '';
};

const getDescription = (
  entries: {
    flavor_text: string;
    language: GenericResponse;
  }[]
): string => {
  const pokemonEntry = entries.find(({ language }) => language.name === 'en');
  return pokemonEntry?.flavor_text ?? '';
};
