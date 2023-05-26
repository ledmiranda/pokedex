import { css, styled } from 'styled-components';

interface ITab {
  $isActive: boolean;
  $typeColor: string;
}

interface IActiveTab {
  $typeColor: string;
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  background-color: white;
  border-radius: 64px 64px 0 0;
  padding: 32px 16px 0;
`;

const Photo = styled.img`
  position: absolute;
  bottom: 100%;
  margin-bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 30%;
  height: auto;
  max-height: 40vh;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));

  @media only screen and (min-width: 479px) {
    display: none;
  }

  @media only screen and (max-width: 479px) {
    top: -80%;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 16px 0 32px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: 479px) {
    margin-top: 54px;
  }
`;

const ActiveTab = css<IActiveTab>`
  color: ${({ $typeColor }) => $typeColor && 'rgb(51, 51, 51)'};
  font-weight: bold;
  border-bottom: ${({ $typeColor }) => `4px solid ${$typeColor}`};
`;

const Tab = styled.button<ITab>`
  background: transparent;
  border: none;
  font-size: 1em;
  margin: 0 32px 0;
  color: ${(props) =>
    props.$isActive ? 'rgb(51, 51, 51)' : 'rgba(0, 0, 0, 0.2)'};
  ${({ $isActive }) => $isActive && ActiveTab}

  @media only screen and (max-width: 479px) {
    margin: 0 16px 0;
  }
`;

const InfoContentStyles = {
  InfoContainer,
  Photo,
  TabsContainer,
  Tab,
};

export default InfoContentStyles;
