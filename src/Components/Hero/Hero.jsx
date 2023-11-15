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
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
          },
          alignItems: 'center',
          mt: '162px',
          p: {
            xs: ' 0 30px',
            sm: ' 0 100px',
            md: ' 0 100px',
            lg: ' 0 100px',
            xl: ' 0 100px',
          },
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
