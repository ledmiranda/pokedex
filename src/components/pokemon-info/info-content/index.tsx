import InfoContentStyles from './info-content.style';

interface IInfoContent {
  name: string;
  photo: string;
}

const InfoContent = ({ name, photo }: IInfoContent) => {
  const { InfoContainer, Photo } = InfoContentStyles;

  return (
    <InfoContainer>
      <Photo src={photo} alt={name} />
    </InfoContainer>
  );
};

export default InfoContent;
