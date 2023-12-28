import { Container } from '@mui/material';
import React from 'react';
// Locale Files
import EnterpriseTemplate from '../Components/EterpriseTemplate/EnterpriseTemplate';
import FAQ from '../Components/FAQ/FAQ';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import OurBlog from '../Components/OurBlog/OurBlog';
import Services from '../Components/Services/Services';
import { HeroWrapper } from './Main.styles';

const Main = () => {
  return (
    <Container maxWidth="xl">
      <HeroWrapper maxWidth="xl" disableGutters>
        <Header />
        <Hero />
      </HeroWrapper>

      <Services />
      <EnterpriseTemplate />
      <FAQ />
      <OurBlog />
      <Footer />
    </Container>
  );
};

export default Main;
