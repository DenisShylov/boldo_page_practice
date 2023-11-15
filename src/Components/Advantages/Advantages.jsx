import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

const Advantages = () => {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down('sm'));
  const titleTypographyVariant = screenSize ? 'h3' : 'h1';
  const descriptionTypographyVariant = screenSize ? 'h6' : 'h5';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '25px', sm: '25px', md: '25px', lg: '40px', xl: '40px' },
        mb: { xs: '35px', sm: '35px', md: '35px' },
      }}
    >
      <Box
        sx={{
          textAlign: { xs: 'center', sm: 'center', md: 'center' },
          width: {
            xs: '400px',
            sm: '567px',
            md: '567px',
            lg: '567px',
            xl: '567px',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Typography
          variant={titleTypographyVariant}
          sx={{
            color: 'text.white',
            lineHeight: {
              xs: '30px',
              sm: '72px',
              md: '72px',
              lg: '72px',
              xl: '72px',
            },
          }}
        >
          Save time by building <br /> fast with Boldo Template
        </Typography>
        <Typography
          variant={descriptionTypographyVariant}
          sx={{ color: 'text.grey.light', lineHeight: '28px' }}
        >
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'center', md: 'center' },
          gap: '24px',
          height: '60px',
        }}
      >
        <Button
          sx={{
            fontSize: {
              xs: '16px',
              sm: '20px',
              md: '20px',
              lg: '20px',
              xl: '20px',
            },

            color: 'text.blue.dark',
            p: {
              xs: '10px 30px',
              sm: '16px 56px',
              md: '16px 56px',
              lg: '16px 56px',
              xl: '16px 56px',
            },
            bgcolor: 'success.main',
            fontWeight: 700,
          }}
        >
          Buy template
        </Button>
        <Button
          sx={{
            fontSize: {
              xs: '16px',
              sm: '20px',
              md: '20px',
              lg: '20px',
              xl: '20px',
            },
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
