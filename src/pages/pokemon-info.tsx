import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonInfo } from '../models/pokemon';
import { search } from '../services/pokemon';
import PokemonInfoStyles from '../components/pokemon-info/pokemon-info.style';
import InfoHeader from '../components/pokemon-info/info-header';
import InfoContent from '../components/pokemon-info/info-content';

const PokemonInfoPage = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokemonInfo>();
  const { Container } = PokemonInfoStyles;

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

  return (
    <Container $typeColor={pokemon.color}>
      <InfoHeader
        id={pokemon.id}
        name={pokemon.name}
        order={pokemon.order}
        types={pokemon.types}
        photo={pokemon.photo}
      />
      <InfoContent id={pokemon.id} name={pokemon.name} color={pokemon.color} />
    </Container>
  );
};

export default PokemonInfoPage;
