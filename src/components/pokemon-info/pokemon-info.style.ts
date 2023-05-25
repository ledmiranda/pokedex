import { styled } from 'styled-components';

interface IHeaderContainer {
  $typeColor: string;
}

const Container = styled.div<IHeaderContainer>`
  background-color: ${(props) => props.$typeColor || ''};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 16px;
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 0;
`;

const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  background-color: white;
  border-radius: 64px 64px 0 0;
  padding-top: 32px;
  padding: 32px 16px 0;
`;

const PokemonInfoStyles = {
  Container,
  HeaderContainer,
  Title,
  TypesContainer,
  ContentContainer,
};

export default PokemonInfoStyles;
