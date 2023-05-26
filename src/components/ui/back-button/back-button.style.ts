import { styled } from 'styled-components';

const BackButton = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 999;
  left: 20px;
  top: 40px;
  height: 3px;
  width: 20px;
  background-color: #fff;

  &:before {
    content: '';
    display: block;
    position: absolute;
    border: 3px solid #fff;
    border-top-color: transparent;
    border-right-color: transparent;
    height: 10px;
    width: 10px;
    left: 0;
    top: calc(3px * -2);
    transform: rotate(45deg);
  }
`;

const BackButtonStyles = {
  BackButton,
};

export default BackButtonStyles;
