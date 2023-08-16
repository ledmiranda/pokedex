import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import InfoEvolutionStyles from './info-evolutions.style';

const InfoEvolutions = () => {
  const pokemonEvolutionInfo = useSelector(
    (state: RootState) => state.selectedPokemon.pokemonChainEvolution
  );
  const {
    Arrow,
    EvolutionContainer,
    EvolveContainer,
    ImageContainer,
    PokemonImage,
    TriggerContainer,
    Section,
  } = InfoEvolutionStyles;

  return (
    <Section>
      {pokemonEvolutionInfo?.map((evolutionInfo) => {
        return (
          <EvolutionContainer
            key={`${evolutionInfo.currentPokemonId}-${evolutionInfo.nextPokemonId}`}
          >
            <EvolveContainer>
              <ImageContainer>
                <PokemonImage
                  src={evolutionInfo.currentPokemonPhoto}
                  alt={evolutionInfo.currentPokemonName}
                />
              </ImageContainer>
              <span>{evolutionInfo.currentPokemonName}</span>
            </EvolveContainer>
            <TriggerContainer>
              <Arrow></Arrow>
              {evolutionInfo.triggerReason} {evolutionInfo.triggerValue}
            </TriggerContainer>
            <EvolveContainer>
              <ImageContainer>
                <PokemonImage
                  src={evolutionInfo.nextPokemonPhoto}
                  alt={evolutionInfo.nextPokemonName}
                />
              </ImageContainer>
              <span>{evolutionInfo.nextPokemonName}</span>
            </EvolveContainer>
          </EvolutionContainer>
        );
      })}
    </Section>
  );
};

export default InfoEvolutions;
