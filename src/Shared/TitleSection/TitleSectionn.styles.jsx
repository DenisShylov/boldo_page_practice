import { Typography, styled } from '@mui/material';
// Locale Files
import { ColumnBox } from '../CustomBox';

export const SectionContainer = styled(ColumnBox)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '842px',
  textAlign: 'center',

  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.grey.lightest,
  fontSize: '20px',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: '48px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '24px',
  },
}));
