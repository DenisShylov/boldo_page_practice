import { Box, styled } from '@mui/material';

export const PhotoCardsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('lg', 'xl')]: {
    display: 'none',
  },
  flexWrap: 'wrap',
  position: 'absolute',
  width: '100%',
  top: '480px',
  justifyContent: 'center',
  zIndex: 11,
}));
