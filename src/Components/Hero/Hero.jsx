import React from 'react';
// Locale Files
import { ColumnBox } from '../../Shared/CustomBox';
import Advantages from '../Advantages/Advantages';
import LogoTicker from '../LogoTicker/LogoTicker';
import StatisticCards from '../StatisticsCards/StatisticCards';
import { HeroContainer } from './Hero.styles';

const Hero = () => {
  return (
    <ColumnBox sx={{ mb: '56px' }}>
      <HeroContainer data-aos="fade-up">
        <Advantages />
        <StatisticCards />
      </HeroContainer>
      <LogoTicker />
    </ColumnBox>
  );
};

export default Hero;
