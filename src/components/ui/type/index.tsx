import TypeStyles from './type.style';

interface IType {
  name: string;
}

const Type = ({ name }: IType) => {
  const { Type } = TypeStyles;

  return <Type>{name}</Type>;
};

export default Type;
