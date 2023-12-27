import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, Card, Typography, styled } from '@mui/material';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';

export const Img = styled('img')(({ theme }) => ({
  width: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '300px',
  },
}));

export const ManCardContainer = styled(RowBox)(({ theme }) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '1200px',
  gap: '130px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
  [theme.breakpoints.down('md')]: {
    gap: '200px',
  },
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 251,
  backgroundColor: theme.palette.text.white,
  position: 'absolute',
  top: '230px',
  right: '57px',
  borderRadius: '24px',
  boxShadow: ' 0px 4px 32px 0px rgba(0, 0, 0, 0.12)',
  gap: '20px',
  display: 'flex',
  flexDirection: 'column',
  padding: '40px',
  paddingBottom: 0,
  width: 'auto',
  height: '388px',

  [theme.breakpoints.down('md')]: {
    width: '200px',
    height: '300px',
  },
  [theme.breakpoints.only('xs')]: {
    height: '250px',
  },
}));

export const NumberText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope',
  fontWeight: 700,
  fontSize: '24px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
  },
}));

export const DescrText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: 'Manrope',
  fontSize: '14px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '12px',
  },
}));

export const ListContainer = styled(ColumnBox)(({ theme }) => ({
  alignItems: 'flex-start',

  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
  },
}));

export const WrapperText = styled(Typography)(({ theme }) => ({
  width: '493px',

  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  lineHeight: '56px',

  [theme.breakpoints.down('md')]: {
    fontSize: '26px',
  },
  [theme.breakpoints.only('md')]: {
    lineHeight: '46px',
  },
  [theme.breakpoints.only('sm')]: {
    lineHeight: '36px',
  },
  [theme.breakpoints.only('xs')]: {
    lineHeight: '26px',
  },
}));

export const CheckIcon = styled(CheckCircleIcon)(({ theme }) => ({
  marginRight: '27px',
  width: '36px',
  height: '36px',
}));

export const ListText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',

  [theme.breakpoints.only('sm')]: {
    fontSize: '16px',
  },
}));

export const StartNowBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.text.white,
  backgroundColor: theme.palette.text.blue.dark,
  marginTop: '56px',

  '&:hover': {
    backgroundColor: theme.palette.text.blue.dark,
  },
}));
