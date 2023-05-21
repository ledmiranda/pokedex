import { useRef } from 'react';
import SearchStyles from './search.style';

interface ISearch {
  onSearch: (name: string) => void;
}

const Search = ({ onSearch }: ISearch) => {
  const pokemonNameInput = useRef<HTMLInputElement>(null);

  const searchHandler = () => {
    const searchValue = pokemonNameInput.current?.value;

    if (searchValue) {
      onSearch(searchValue);
    }
  };

  return (
    <SearchStyles.SearchContainer>
      <input type="text" name="pokemon_name" ref={pokemonNameInput} />
      <button onClick={searchHandler}>Search</button>
    </SearchStyles.SearchContainer>
  );
};

export default Search;
