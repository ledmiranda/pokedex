import { useSelector } from 'react-redux';
import { RooState } from '../../../store';
import InfoAboutStyles from './info-about.style';

const InfoAbout = () => {
  const pokemonContent = useSelector(
    (state: RooState) => state.selectedPokemon.pokemonContent
  );
  const { CapitalizeLabel, Section, SectionContent, SectionHeader } =
    InfoAboutStyles;

  return (
    <div>
      <div>
        <p>
          <strong>{pokemonContent?.nameSpecie}</strong>.&nbsp;
          {pokemonContent?.description}
        </p>
      </div>
      <Section>
        <SectionHeader $typeColor={pokemonContent?.color ?? ''}>
          Pokedex Data
        </SectionHeader>
        <SectionContent>
          <div>Specie:</div>
          <CapitalizeLabel>{pokemonContent?.nameSpecie}</CapitalizeLabel>
          <div>Height:</div>
          <div>{pokemonContent?.height}</div>
          <div>Weight:</div>
          <div>{pokemonContent?.weight}</div>
          <div>Habitat:</div>
          <CapitalizeLabel>{pokemonContent?.habitat}</CapitalizeLabel>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader $typeColor={pokemonContent?.color ?? ''}>
          Training
        </SectionHeader>
        <SectionContent>
          <div>Catch Rate:</div>
          <div>{pokemonContent?.captureRatio}</div>
          <div>Base Friendship:</div>
          <div>{pokemonContent?.baseHappiness}</div>
          <div>Base Exp:</div>
          <div>{pokemonContent?.baseExperience}</div>
          <div>Growth Rate:</div>
          <CapitalizeLabel>{pokemonContent?.growthRate}</CapitalizeLabel>
        </SectionContent>
      </Section>
    </div>
  );
};

export default InfoAbout;
