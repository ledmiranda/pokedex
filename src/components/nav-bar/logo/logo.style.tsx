import { styled } from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 25px 25px 0 0;
  border-style: solid;
  padding: 12px 0 12px 0;
`;

const LogoImg = styled.img`
  width: 15%;

  @media only screen and (max-width: 1023px) {
    width: 25%;
  }

  @media only screen and (max-width: 479px) {
    width: 50%;
  }
`;

const LogoStyles = {
  LogoContainer,
  LogoImg,
};

export default LogoStyles;
