import styled from 'styled-components';

interface ISectionHeader {
  $typeColor: string;
}

const Section = styled.div`
  margin: 12px 0 12px;
`;

const SectionHeader = styled.div<ISectionHeader>`
  color: ${({ $typeColor }) => $typeColor};
  border-bottom: ${({ $typeColor }) => `1px solid ${$typeColor}`};
  font-weight: 600;
`;

const SectionContent = styled.div`
  padding: 6px 0 6px;
`;

const SectionItem = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 3px 0 3px;
`;

const CapitalizeLabel = styled.div`
  text-transform: capitalize;
`;

const SectionTable = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  row-gap: 6px;
`;

const InfoBattleStyles = {
  CapitalizeLabel,
  Section,
  SectionContent,
  SectionHeader,
  SectionItem,
  SectionTable,
};

export default InfoBattleStyles;
