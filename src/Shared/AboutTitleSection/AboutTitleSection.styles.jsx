import { Typography, styled } from '@mui/material';
import { ColumnBox } from '../CustomBox';

export const AboutTitleContainer = styled(ColumnBox)(({ theme }) => ({
  textAlign: 'left',
  width: '842px',
  gap: '32px',
  [theme.breakpoints.down('lg')]: {
    width: '300px ',
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  lineHeight: '72px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
    lineHeight: '36px',
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  width: '799px',
  lineHeight: '32px',
  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },
}));
