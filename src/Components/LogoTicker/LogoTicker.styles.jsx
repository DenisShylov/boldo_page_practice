import { Typography, styled } from '@mui/material';
import { ReactComponent as boldo } from '../../Assets/boldo.svg';
import { ReactComponent as presto } from '../../Assets/presto.svg';

export const BoldoLogo = styled(boldo)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '20px',
    height: '16px',
  },
  [theme.breakpoints.up('sm', 'md')]: {
    width: '23px',
    height: '23px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    width: '23px',
    height: '33px',
  },
  color: theme.palette.text.white,
  // width: '23px',
  // height: '33px',
}));

export const PrestoLogo = styled(presto)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '20px',
    height: '16px',
  },
  [theme.breakpoints.up('sm', 'md')]: {
    width: '23px',
    height: '23px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    width: '23px',
    height: '33px',
  },
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  fontFamily: ['Manrope', 'Roboto'].join(','),
  [theme.breakpoints.up('xs', 'sm')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    fontSize: '36px',
  },
  fontWeight: 700,
  lineHeight: '28px',
}));
