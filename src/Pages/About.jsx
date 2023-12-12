import React from 'react';
import Header from '../Components/Header/Header';
import { Box } from '@mui/material';
import Footer from '../Components/Footer/Footer';
import AboutTitle from '../Components/AboutTitle/AboutTitle';
import AboutPhotoCards from '../Components/AboutPhotoCards/AboutPhotoCards';
import OurStory from '../Components/OurStory/OurStory';
import { ColumnBox } from '../Shared/ColumnBox';
import OurNumbers from '../Components/OurNumbers/OurNumbers';
import OurTeam from '../Components/OurTeam/OurTeam';
import OurValues from '../Components/OurValues/OurValues';

const About = () => {
  return (
    <>
      <Box
        sx={{ position: 'relative', mb: '600px', bgcolor: 'text.blue.dark' }}
      >
        <Header />;
        <AboutTitle />
        <AboutPhotoCards />
      </Box>
      <ColumnBox sx={{ alignItems: 'center' }}>
        <OurStory />
      </ColumnBox>
      <OurNumbers />
      <OurTeam />
      <OurValues />
      <Footer />
    </>
  );
};

export default About;
