import styled from 'styled-components';

const Section = styled.div`
  margin: 12px 0 12px;
`;

const EvolutionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const EvolveContainer = styled.div`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const PokemonImage = styled.img`
  max-width: 80%;
  max-height: 10vh;
  height: auto;
  position: relative;
  z-index: 2;
`;

const TriggerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
`;

const Arrow = styled.div`
  width: 2.5em;
  height: 3px;
  display: block;
  position: relative;
  margin-bottom: 10px;
  background-color: #eee;

  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 5px;
    width: 5px;
    border: 3px solid #eee;
    border-left-color: transparent;
    border-bottom-color: transparent;
    right: 0;
    top: 0;
    margin-top: calc(3px * -1.4);
    transform: rotate(45deg);
  }
`;

const InfoEvolutionStyles = {
  EvolutionContainer,
  EvolveContainer,
  ImageContainer,
  PokemonImage,
  TriggerContainer,
  Arrow,
  Section,
};

export default InfoEvolutionStyles;
