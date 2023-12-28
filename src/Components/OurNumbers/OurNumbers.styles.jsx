import { Typography, styled } from '@mui/material';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';

export const OurNumberContainer = styled(ColumnBox)(({ theme }) => ({
  backgroundColor: theme.palette.text.blue.dark,
  alignItems: 'center',
  textAlign: 'center',
  padding: '96px 0',
  marginTop: '96px',
}));

export const TextContainer = styled(ColumnBox)(({ theme }) => ({
  width: '842px',
  gap: '12px',
  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },
}));

export const BigTitle = styled(Typography)(({ theme }) => ({
  lineHeight: '72px',
  color: theme.palette.text.white,
  [theme.breakpoints.down('lg')]: {
    fontSize: '30px',
    lineHeight: '36px',
  },
}));

export const NumberTickerContainer = styled(RowBox)(({ theme }) => ({
  justifyContent: 'space-between',
  width: '1000px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
