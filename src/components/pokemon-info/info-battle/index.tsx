import { useSelector } from 'react-redux';
import InfoBattleStyles from './info-battle.style';
import { RootState } from '../../../store';

const InfoBattle = () => {
  const pokemonContent = useSelector(
    (state: RootState) => state.selectedPokemon.pokemonContent
  );
  const {
    CapitalizeLabel,
    Section,
    SectionContent,
    SectionHeader,
    SectionItem,
    SectionTable,
  } = InfoBattleStyles;

  console.log(pokemonContent);
  return (
    <div>
      <Section>
        <SectionHeader $typeColor={pokemonContent?.color ?? ''}>
          Base Stats
        </SectionHeader>
        <SectionContent>
          {pokemonContent?.stats.map((stat) => {
            return (
              <SectionItem key={stat.name}>
                <CapitalizeLabel>{stat.name}:</CapitalizeLabel>
                <div>{stat.baseStat}</div>
              </SectionItem>
            );
          })}
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader $typeColor={pokemonContent?.color ?? ''}>
          Abilities
        </SectionHeader>
        <SectionContent>
          <SectionTable>
            {pokemonContent?.abilities.map((ability) => {
              return <CapitalizeLabel key={ability}>{ability}</CapitalizeLabel>;
            })}
          </SectionTable>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader $typeColor={pokemonContent?.color ?? ''}>
          Move attacks
        </SectionHeader>
        <SectionContent>
          <SectionTable>
            {pokemonContent?.moves.map((move) => {
              return <CapitalizeLabel key={move}>{move}</CapitalizeLabel>;
            })}
          </SectionTable>
        </SectionContent>
      </Section>
    </div>
  );
};

export default InfoBattle;
