import { Box } from '@mui/material';
import React from 'react';
import { BoldoLogo, PrestoLogo, LogoText } from './LogoTicker.styles';

const LogoTicker = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '93px',
        alignItems: 'center',
        justifyContent: 'center',

        background:
          'linear-gradient(90deg, #0A2640 0%, rgba(10, 38, 64, 0.11) 31.6%, rgba(10, 38, 64, 0.00) 72.89%, #0A2640 97.87%)',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {[1, 2, 3].map(() => (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '10px',
                mr: '40px',
              }}
            >
              <BoldoLogo />
              <LogoText variant="h2">Boldo</LogoText>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '10px',
                mr: '40px',
              }}
            >
              <PrestoLogo />
              <LogoText variant="h2">Presto</LogoText>
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default LogoTicker;
