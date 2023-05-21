import { useEffect } from 'react';
import { RooState } from '../../store';
import { useSelector } from 'react-redux';
import { fetchPokemonData } from '../../store/pokemon-actions';
import { useAppDispatch } from '../../hooks/redux';
import PokemonItem from '../pokemon-card';
import PokemonListStyles from './pokemon-list.style';

const PokemonList = () => {
  const { Container } = PokemonListStyles;
  const dispatch = useAppDispatch();
  const pokemonList = useSelector((state: RooState) => state.pokemon.pokemons);

  useEffect(() => {
    dispatch(fetchPokemonData(1));
  }, [dispatch]);

  if (pokemonList === null || pokemonList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {pokemonList.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </Container>
  );
};

export default PokemonList;
