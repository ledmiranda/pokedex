import Type from '../../ui/type';
import HeaderStyles from './info-header.style';

interface IHeader {
  id: number;
  order: string;
  name: string;
  photo: string;
  types: string[];
}

const InfoHeader = ({ id, order, name, photo, types }: IHeader) => {
  const { HeaderContainer, Order, Photo, Title, TypesContainer, WaterMark } =
    HeaderStyles;

  return (
    <HeaderContainer>
      <WaterMark />
      <Order>{order}</Order>
      <Title>{name}</Title>
      <TypesContainer>
        {types?.map((type) => (
          <Type key={`${id}-${type}`} name={type} />
        ))}
      </TypesContainer>
      <Photo src={photo} alt={name} />
    </HeaderContainer>
  );
};

export default InfoHeader;
