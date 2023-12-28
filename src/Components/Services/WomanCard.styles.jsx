import { Card, Typography, styled } from '@mui/material';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';

export const Img = styled('img')(({ theme }) => ({
  width: 'auto',

  [theme.breakpoints.down('md')]: {
    width: '300px',
  },
}));

export const WomanCardContainer = styled(RowBox)(({ theme }) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '200px',
  width: '1200px',
  gap: '160px',
  [theme.breakpoints.only('xs')]: {
    flexDirection: 'column-reverse',
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}));

export const ListWrapper = styled(ColumnBox)(({ theme }) => ({
  gap: '40px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    width: '300px',
  },
}));

export const ListText = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  lineHeight: '56px',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    lineHeight: '36px',
    fontSize: '26px',
    width: '300px',
  },
}));

export const ItemWrapper = styled(RowBox)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.text.blue.dark,
  color: theme.palette.text.white,
  borderRadius: '4px',
  boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.08)',
  padding: '16px 50px ',

  [theme.breakpoints.down('sm')]: {
    padding: '8px 25px',
  },
}));

export const ItemText = styled(Typography)(({ theme }) => ({
  fontSize: 'inherit',

  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 291,
  backgroundColor: theme.palette.text.white,
  position: 'absolute',
  bottom: '-150px',
  left: '57px',
  borderRadius: '24px',
  boxShadow: ' 0px 4px 32px 0px rgba(0, 0, 0, 0.12)',
  gap: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px',
  paddingBottom: 0,
  height: '388px',
  width: '291px',

  [theme.breakpoints.down('md')]: {
    height: '335px',
    width: '200px',
  },
}));
