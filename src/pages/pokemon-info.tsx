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
  const selectedPokemonCard = useSelector(
    (state: RooState) => state.selectedPokemon.pokemonCard
  );
  const { Container } = PokemonInfoStyles;

  useEffect(() => {
    if (pokemonName) {
      dispatch(fetchSelectedPokemonData(pokemonName));
    }
  }, [pokemonName, dispatch]);

  if (!selectedPokemonCard) {
    return <div>Loading...</div>;
  }

  return (
    <Container $typeColor={selectedPokemonCard.color}>
      <InfoHeader
        id={selectedPokemonCard.id}
        name={selectedPokemonCard.name}
        order={selectedPokemonCard.order}
        types={selectedPokemonCard.types}
        photo={selectedPokemonCard.photo}
      />
      <InfoContent color={selectedPokemonCard.color} />
    </Container>
  );
};

export default PokemonInfoPage;
