import { Box, Typography } from '@mui/material';
import React from 'react';

const AboutTitle = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        textAlign: 'center',
      }}
    >
      {/* title */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '842px',
        }}
      >
        <Typography variant="h4" color={'text.grey.light'}>
          About
        </Typography>
        <Typography
          variant="big"
          color={'text.white'}
          sx={{ lineHeight: '84px' }}
        >
          We love to make great things, things that matter.
        </Typography>
      </Box>
      {/* SubTitle */}
      <Typography
        variant="h5"
        color={'text.grey.light'}
        sx={{
          width: '745px',
          height: '64px',
          textAlign: 'center',
          mb: '166px',
        }}
      >
        Funding handshake buyer business-to-business metrics iPad partnership.
        First mover advantage innovator success deployment non-disclosure.
      </Typography>
    </Box>
  );
};

export default AboutTitle;
