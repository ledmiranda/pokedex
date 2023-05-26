import { useNavigate } from 'react-router-dom';
import BackButtonStyles from './back-button.style';

const BackButton = () => {
  const navigate = useNavigate();
  const { BackButton } = BackButtonStyles;

  const goBack = () => {
    navigate(-1);
  };

  return <BackButton onClick={goBack} />;
};

export default BackButton;
