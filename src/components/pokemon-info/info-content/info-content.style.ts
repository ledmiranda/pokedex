import { styled } from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: white;
  border-radius: 64px 64px 0 0;
  padding-top: 32px;
  padding: 32px 16px 0;
`;

const Photo = styled.img`
  width: 20vh;
  height: 20vh;
  position: absolute;
  top: -80px;

  @media only screen and (min-width: 479px) {
    display: none;
  }
`;

const InfoContentStyles = {
  InfoContainer,
  Photo,
};

export default InfoContentStyles;
