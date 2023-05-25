import { styled } from 'styled-components';

interface IHeaderContainer {
  $typeColor: string;
}

const Container = styled.div<IHeaderContainer>`
  background-color: ${(props) => props.$typeColor || ''};
`;

const PokemonInfoStyles = {
  Container,
};

export default PokemonInfoStyles;
