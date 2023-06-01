import { GenericResponse } from './shared';

export interface Gender {
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
