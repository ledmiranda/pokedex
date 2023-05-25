import { styled } from 'styled-components';

interface IHeaderContainer {
  $typeColor: string;
}

const Container = styled.div<IHeaderContainer>`
  background-color: ${(props) => props.$typeColor || ''};
`;

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 48px 16px 16px;

  @media only screen and (max-width: 479px) {
    padding: 36px 16px 16px;
  }
`;

const Order = styled.span`
  position: absolute;
  top: 20px;
  font-size: 2.5em;
  color: rgba(255, 255, 255, 0.2);

  @media only screen and (max-width: 479px) {
    right: 20px;
    font-size: 2em;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin: 36px 0 0;

  @media only screen and (max-width: 479px) {
    margin: 32px 0 0;
  }
`;

const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
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
  Order,
  Title,
  TypesContainer,
  ContentContainer,
};

export default PokemonInfoStyles;
