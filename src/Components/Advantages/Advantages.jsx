import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Advantages = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <Box
        sx={{
          width: '567px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: 'text.white', lineHeight: '72px' }}
        >
          Save time by building <br /> fast with Boldo Template
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: 'text.grey.light', lineHeight: '28px' }}
        >
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '24px', height: '60px' }}>
        <Button
          sx={{
            fontSize: '20px',

            color: 'text.blue.dark',
            p: '16px 56px',
            bgcolor: 'success.main',
            fontWeight: 700,
          }}
        >
          Buy template
        </Button>
        <Button
          sx={{
            fontSize: '20px',
            color: 'text.white',
            p: '16px 56px',
            bgcolor: 'transparent',
            border: `2px solid #FFF`,
            fontWeight: 700,
          }}
        >
          Explore
        </Button>
      </Box>
    </Box>
  );
};

export default Advantages;
