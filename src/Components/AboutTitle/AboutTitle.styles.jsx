import { Typography, styled } from '@mui/material';
import { ColumnBox } from '../../Shared/CustomBox';

export const TitleContainer = styled(ColumnBox)(({ theme }) => ({
  alignItems: 'center',
  gap: '32px',
  textAlign: 'center',
}));

export const Title = styled(ColumnBox)(({ theme }) => ({
  width: '842px',
  [theme.breakpoints.down('lg')]: {
    width: '300px',
    fontSize: '24px',
    lineHeight: '36px',
  },
  gap: '12px',
}));
export const TitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  lineHeight: '84px',
  [theme.breakpoints.down('lg')]: {
    lineHeight: '36px',
    fontSize: '24px',
  },
}));
export const Subtitle = styled(Typography)(({ theme }) => ({
  width: '745px',
  height: '64px',
  textAlign: 'center',
  marginBottom: '166px',
  color: theme.palette.text.grey.light,
  [theme.breakpoints.down('lg')]: {
    width: '300px',
    marginBottom: '100px',
  },
}));
