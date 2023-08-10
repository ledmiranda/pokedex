import { GenericResponse } from './shared';
import { Gender, SpecieResponse } from './species';
import { Stat } from './stats';
import { getTypeColor } from './types';

export interface PokemonCard {
  id: number;
  name: string;
  order: string;
  types: string[];
  photo: string;
  color: string;
}

export interface PokemonContent {
  id: number;
  abilities: string[];
  baseExperience: number;
  height: number;
  moves: string[];
  stats: Stat[];
  weight: number;
  color: string;
  nameSpecie: string;
  description: string;
  habitat: string;
  captureRatio: number;
  baseHappiness: number;
  eggGroups: string[];
  evolutionChainUrl: string;
  gender: Gender;
  growthRate: string;
  hatchCounter: number;
  shape: string;
  generation: string;
}

export interface PokemonInfoResponse {
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
    version_group_details: {
      level_learned_at: number;
      move_learn_method: GenericResponse;
    }[];
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

export const formatDataFromResponse = (
  info: PokemonInfoResponse,
  specie: SpecieResponse
): PokemonContent => {
  const {
    abilities,
    base_experience,
    height,
    id,
    moves,
    stats,
    types,
    weight,
  } = info;
  const {
    base_happiness,
    capture_rate,
    egg_groups,
    evolution_chain,
    flavor_text_entries,
    gender_rate,
    genera,
    generation,
    growth_rate,
    habitat,
    hatch_counter,
    shape,
  } = specie;

  return {
    id,
    weight,
    abilities: abilities.map(({ ability }) => ability.name),
    baseExperience: base_experience,
    baseHappiness: base_happiness,
    captureRatio: capture_rate,
    color: getTypeColor(types),
    description: getDescription(flavor_text_entries),
    eggGroups: egg_groups.map(({ name }) => name),
    evolutionChainUrl: evolution_chain.url,
    gender: getGender(gender_rate),
    generation: generation.name,
    growthRate: growth_rate.name,
    habitat: habitat.name,
    hatchCounter: hatch_counter,
    shape: shape.name,
    nameSpecie: getSpecieName(genera),
    height,
    moves: getMoves(moves),
    stats: stats.map(({ base_stat, stat }) => ({
      baseStat: base_stat,
      name: stat.name,
    })),
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

const getDescription = (
  entries: {
    flavor_text: string;
    language: GenericResponse;
  }[]
): string => {
  const pokemonEntry = entries.find(({ language }) => language.name === 'en');
  const description = pokemonEntry?.flavor_text.replace('\f', ' ');
  return description ?? '';
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

const getMoves = (
  moves: {
    move: GenericResponse;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: GenericResponse;
    }[];
  }[]
): string[] => {
  const filteredMoves = moves.filter(({ version_group_details }) =>
    version_group_details.some(
      (detail) => detail.move_learn_method.name === 'level-up'
    )
  );

  return filteredMoves.map((moves) => moves.move.name);
};
