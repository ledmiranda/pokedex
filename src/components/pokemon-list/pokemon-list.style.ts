import { styled } from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: 16px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 479px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PokemonListStyles = {
  Container,
};

export default PokemonListStyles;
