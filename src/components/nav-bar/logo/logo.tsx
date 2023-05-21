import logo from '../../../assets/pokedex-logo.png';
import LogoStyles from './logo.style';

const Logo = () => {
  const { LogoContainer, LogoImg } = LogoStyles;

  return (
    <LogoContainer>
      <LogoImg src={logo} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
