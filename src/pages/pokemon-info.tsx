import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonInfoStyles from '../components/pokemon-info/pokemon-info.style';
import InfoHeader from '../components/pokemon-info/info-header';
import InfoContent from '../components/pokemon-info/info-content';
import { useAppDispatch } from '../hooks/redux';
import { useSelector } from 'react-redux';
import { RooState } from '../store';
import { fetchSelectedPokemonData } from '../store/selected-pokemon-actions';

const PokemonInfoPage = () => {
  const { pokemonName } = useParams();
  const dispatch = useAppDispatch();
  const pokemonCard = useSelector(
    (state: RooState) => state.selectedPokemon.pokemonCard
  );
  const { Container } = PokemonInfoStyles;

  useEffect(() => {
    if (pokemonName) {
      dispatch(fetchSelectedPokemonData(pokemonName));
    }
  }, [pokemonName, dispatch]);

  if (!pokemonCard) {
    return <div>Loading...</div>;
  }

  return (
    <Container $typeColor={pokemonCard.color}>
      <InfoHeader
        id={pokemonCard.id}
        name={pokemonCard.name}
        order={pokemonCard.order}
        types={pokemonCard.types}
        photo={pokemonCard.photo}
      />
      <InfoContent color={pokemonCard.color} />
    </Container>
  );
};

export default PokemonInfoPage;
