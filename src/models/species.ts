// interface Gender {
//   male: number;
//   female: number;
// }

export interface Specie {
  name: string;
  description: string;
  // height: string;
  // weight: string;
  // captureRatio: number;
  // gender: Gender;
  // eggGroup: string;
  // growthRate: number;
  // habitat: string;
}

export const formatSpecieFromResponse = (data: any): Specie => {
  const { genera, flavor_text_entries } = data;
  const specie = genera.find((gen: any) => gen.language.name === 'us');
  const nameSpecie = specie.genus;
  const textEntries = flavor_text_entries.find(
    (entry: any) => entry.language.name === 'en'
  );
  const description = textEntries.flavor_text;

  return {
    name: nameSpecie,
    description,
  };
};
