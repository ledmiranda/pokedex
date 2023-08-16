export const extractId = (url: string): string => {
  const separatedUrl = url.match(/\/(\d+)\//);

  return separatedUrl ? separatedUrl[1] : '';
};

export const getImageUrl = (pokemonId: string): string => {
  const baseURL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';

  if (parseInt(pokemonId) >= 650) {
    return `${baseURL}}/official-artwork/${pokemonId}.png`;
  }

  return `${baseURL}/dream-world/${pokemonId}.svg`;
};
