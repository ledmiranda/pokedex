import { styled } from 'styled-components';

interface IHeaderContainer {
  $typeColor: string;
}

const Container = styled.div``;

const HeaderContainer = styled.div<IHeaderContainer>`
  color: white;
  background-color: ${(props) => props.$typeColor || ''};
  padding: 16px;
`;

const Title = styled.h2`
  text-transform: uppercase;
`;

const TypesContainer = styled.div`
  align-self: center;
  width: 5%;
`;

const PokemonInfoStyles = { Container, HeaderContainer, Title, TypesContainer };

export default PokemonInfoStyles;
