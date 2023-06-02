import { useSelector } from 'react-redux';
import { RooState } from '../../../store';

const InfoAbout = () => {
  const pokemonContent = useSelector(
    (state: RooState) => state.selectedPokemon.pokemonContent
  );

  return (
    <div>
      <div>
        <p>
          <strong>{pokemonContent?.nameSpecie}</strong>.&nbsp;
          {pokemonContent?.description}
        </p>
      </div>
    </div>
  );
};

export default InfoAbout;
