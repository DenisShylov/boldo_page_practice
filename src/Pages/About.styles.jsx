import { Box, styled } from '@mui/material';

export const AboutHeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: '600px',
  backgroundColor: theme.palette.text.blue.dark,
  [theme.breakpoints.down('lg')]: {
    marginBottom: '50px',
  },
}));
