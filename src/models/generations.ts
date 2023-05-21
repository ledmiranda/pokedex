interface Generation {
  id: number;
  name: string;
  limit: number;
  offset: number;
}

export const Generations: Generation[] = [
  {
    id: 1,
    name: 'I',
    offset: 0,
    limit: 151,
  },
  {
    id: 2,
    name: 'II',
    offset: 151,
    limit: 100,
  },
  {
    id: 3,
    name: 'III',
    offset: 251,
    limit: 135,
  },
  {
    id: 4,
    name: 'IV',
    offset: 386,
    limit: 107,
  },
  {
    id: 5,
    name: 'V',
    offset: 493,
    limit: 156,
  },
  {
    id: 6,
    name: 'VI',
    offset: 649,
    limit: 72,
  },
  {
    id: 7,
    name: 'VII',
    offset: 721,
    limit: 88,
  },
  {
    id: 8,
    name: 'VIII',
    offset: 809,
    limit: 96,
  },
];
