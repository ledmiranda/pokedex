import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
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
  font-size: 2em;
  color: rgba(255, 255, 255, 0.2);

  @media only screen and (max-width: 479px) {
    right: 20px;
    font-size: 1.5em;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin: 24px 0 0;

  @media only screen and (max-width: 479px) {
    margin: 32px 0 16px;
  }
`;

const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

const Photo = styled.img`
  width: 40vh;
  height: 40vh;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));

  @media only screen and (max-width: 479px) {
    height: auto;
    max-height: 40vh;
    max-width: 30%;
  }
`;

const WaterMark = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: -60px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.2);

  &:before {
    display: block;
    border-radius: 100%;
    content: '';
    position: relative;
    width: 10em;
    padding-bottom: 10em;
    border: 4em solid currentColor;
    clip-path: polygon(
      0 0,
      0 40%,
      50% 40%,
      50% 60%,
      0 60%,
      0 100%,
      100% 100%,
      100% 60%,
      50% 60%,
      50% 40%,
      100% 40%,
      100% 0
    );
  }

  &:after {
    display: block;
    border-radius: 100%;
    content: '';
    position: absolute;
    width: 5em;
    padding-bottom: 5em;
    background-color: currentColor;
  }

  @media only screen and (min-width: 479px) {
    display: none;
  }
`;

const HeaderStyles = {
  HeaderContainer,
  Order,
  Photo,
  Title,
  TypesContainer,
  WaterMark,
};

export default HeaderStyles;
