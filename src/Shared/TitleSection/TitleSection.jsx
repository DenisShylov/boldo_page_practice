// Locale Files
import { Description, SectionContainer, Title } from './TitleSectionn.styles';

export const TitleSection = ({ title, description }) => (
  <SectionContainer>
    <Title variant="h4">{title}</Title>
    <Description variant="h1">{description}</Description>
  </SectionContainer>
);
