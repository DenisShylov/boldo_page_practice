import { Box, Container } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import Advantages from '../Advantages/Advantages';
import StatisticCards from '../StatisticsCards/StatisticCards';
import LogoTicker from '../LogoTicker/LogoTicker';
const Hero = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: '56px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: '162px',
          p: ' 0 100px',
          justifyContent: 'space-between',
          mb: '56px',
        }}
      >
        <Advantages />
        <StatisticCards />
      </Box>
      <LogoTicker />
    </Box>
  );
};

export default Hero;
