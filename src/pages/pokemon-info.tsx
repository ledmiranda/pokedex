import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonInfo } from '../models/pokemon';
import { search } from '../services/pokemon';
import PokemonInfoStyles from '../components/pokemon-info/pokemon-info.style';
import Type from '../components/ui/type';

const PokemonInfoPage = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokemonInfo>();
  const {
    Container,
    HeaderContainer,
    Order,
    Title,
    TypesContainer,
    ContentContainer,
  } = PokemonInfoStyles;

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
      <HeaderContainer>
        <Order>{pokemon.order}</Order>
        <Title>{pokemon.name}</Title>
        <TypesContainer>
          {pokemon.types?.map((type) => (
            <Type key={`${pokemon.id}-${type}`} name={type} />
          ))}
        </TypesContainer>
        <img src={pokemon.photo} alt={pokemon.name} />
      </HeaderContainer>
      <ContentContainer>Info</ContentContainer>
    </Container>
  );
};

export default PokemonInfoPage;
