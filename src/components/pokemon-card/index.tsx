import { useNavigate } from 'react-router-dom';
import { PokemonCard } from '../../models/pokemon';
import PokemonCardStyles from './pokemon-card.style';
import Type from '../ui/type';

interface IPokemonItem {
  pokemon: PokemonCard;
}

const PokemonItem = ({ pokemon }: IPokemonItem) => {
  const {
    CardContainer,
    InfoContainer,
    Order,
    PhotoContainer,
    Photo,
    PokemonContainer,
    TypeContainer,
  } = PokemonCardStyles;
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`${pokemon.name}`);
  };

  return (
    <CardContainer>
      <PokemonContainer $typeColor={pokemon.color} onClick={goToDetail}>
        <Order>{pokemon.order}</Order>
        <InfoContainer>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <TypeContainer>
            {pokemon.types.map((type) => (
              <Type key={`${pokemon.name}-${type}`} name={type} />
            ))}
          </TypeContainer>
        </InfoContainer>
        <PhotoContainer>
          <Photo src={pokemon.photo} alt={pokemon.name} />
        </PhotoContainer>
      </PokemonContainer>
    </CardContainer>
  );
};

export default PokemonItem;
