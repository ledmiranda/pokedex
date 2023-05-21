import { PokemonCard } from '../../models/pokemon';
import PokemonCardStyles from './pokemon-card.style';

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
    Type,
  } = PokemonCardStyles;

  return (
    <CardContainer>
      <PokemonContainer $typeColor={pokemon.color}>
        <Order>{pokemon.order}</Order>
        <InfoContainer>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <TypeContainer>
            {pokemon.types.map((type) => (
              <Type key={`${pokemon.name}-${type}`}>{type}</Type>
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
