import { Container } from '@mui/material';
import React from 'react';
// Locale Files
import AboutPhotoCards from '../Components/AboutPhotoCards/AboutPhotoCards';
import AboutTitle from '../Components/AboutTitle/AboutTitle';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import OurNumbers from '../Components/OurNumbers/OurNumbers';
import OurStory from '../Components/OurStory/OurStory';
import OurTeam from '../Components/OurTeam/OurTeam';
import OurValues from '../Components/OurValues/OurValues';
import { ColumnBox } from '../Shared/CustomBox';
import { AboutHeroContainer } from './About.styles';

const About = () => {
  return (
    <Container maxWidth="xl">
      <AboutHeroContainer>
        <Header />;
        <AboutTitle />
        <AboutPhotoCards />
      </AboutHeroContainer>
      <ColumnBox sx={{ alignItems: 'center' }}>
        <OurStory />
      </ColumnBox>
      <OurNumbers />
      <OurTeam />
      <OurValues />
      <Footer />
    </Container>
  );
};

export default About;
