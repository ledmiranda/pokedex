interface IInfoAbout {
  id: number;
}

const InfoAbout = ({ id }: IInfoAbout) => {
  return <div>This is the About page {id}</div>;
};

export default InfoAbout;
