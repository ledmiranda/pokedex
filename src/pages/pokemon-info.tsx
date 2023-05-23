import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonInfo } from '../models/pokemon';
import { search } from '../services/pokemon';

const PokemonInfoPage = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokemonInfo>();

  const fetchPokemonData = useCallback(async (pokemonName: string) => {
    const data = await search(pokemonName);

    setPokemon(data);
  }, []);

  useEffect(() => {
    if (pokemonName) {
      fetchPokemonData(pokemonName);
    }
  }, [pokemonName, fetchPokemonData]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return <div>This is the Pokemon Detail Page {pokemon?.name}</div>;
};

export default PokemonInfoPage;
