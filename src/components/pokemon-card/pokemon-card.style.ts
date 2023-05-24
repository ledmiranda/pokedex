import { styled } from 'styled-components';

interface IPokemonContainer {
  $typeColor: string;
}

const CardContainer = styled.div`
  height: 100%;
  padding: 1rem 1rem 1rem 1rem;

  @media only screen and (max-width: 479px) {
    padding: 0 0 1.5rem;
  }
`;

const PokemonContainer = styled.div<IPokemonContainer>`
  display: flex;
  flex-direction: row;
  border-style: solid;
  border-radius: 48px;
  padding: 32px;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  box-shadow: 5px 5px 15px 0 ${(props) => props.$typeColor || ''};
  background-color: ${(props) => props.$typeColor || ''};
  transition: all 0.3s;

  @media only screen and (max-width: 479px) {
    padding: 16px;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      transform: translateY(-5px);
      cursor: pointer;
    }
  }
`;

const InfoContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const TypeContainer = styled.div`
  align-self: center;

  @media only screen and (max-width: 479px) {
    align-self: flex-start;
  }
`;

const Order = styled.span`
  position: absolute;
  top: 20px;
  color: rgba(255, 255, 255, 0.2);
  font-size: 2.5rem;
  right: 40px;

  @media only screen and (max-width: 479px) {
    right: 25px;
  }
`;

const PhotoContainer = styled.div`
  max-width: 50%;
  align-self: flex-end;

  @media only screen and (max-width: 479px) {
    margin-top: 64px;
  }
`;

const Photo = styled.img`
  max-width: 100%;
  max-height: 100%;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
`;

const PokemonCardStyles = {
  CardContainer,
  InfoContainer,
  Order,
  PhotoContainer,
  Photo,
  PokemonContainer,
  TypeContainer,
};

export default PokemonCardStyles;
