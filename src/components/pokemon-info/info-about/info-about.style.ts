import { styled } from 'styled-components';

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
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 12px 0 12px;
  row-gap: 6px;
`;

const CapitalizeLabel = styled.div`
  text-transform: capitalize;
`;

const InfoAboutStyles = {
  CapitalizeLabel,
  Section,
  SectionContent,
  SectionHeader,
};

export default InfoAboutStyles;
