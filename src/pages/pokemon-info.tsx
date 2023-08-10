import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonInfoStyles from '../components/pokemon-info/pokemon-info.style';
import InfoHeader from '../components/pokemon-info/info-header';
import InfoContent from '../components/pokemon-info/info-content';
import { useAppDispatch } from '../hooks/redux';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchSelectedPokemonData } from '../store/selected-pokemon-actions';

const PokemonInfoPage = () => {
  const { pokemonName } = useParams();
  const dispatch = useAppDispatch();
  const pokemonCard = useSelector(
    (state: RootState) => state.selectedPokemon.pokemonCard
  );
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const { Container } = PokemonInfoStyles;

  useEffect(() => {
    if (pokemonName) {
      dispatch(fetchSelectedPokemonData(pokemonName));
    }
  }, [pokemonName, dispatch]);

  if (isLoading || !pokemonCard) {
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
