import { Typography, styled } from '@mui/material';
import { ReactComponent as boldo } from '../../Assets/boldo.svg';
import { ReactComponent as presto } from '../../Assets/presto.svg';
import { RowBox } from '../../Shared/CustomBox';

export const LogoTickerContainer = styled(RowBox)(({ theme }) => ({
  height: '93px',
  alignItems: 'center',
  justifyContent: 'center',
  background:
    'linear-gradient(90deg, #0A2640 0%, rgba(10, 38, 64, 0.11) 31.6%, rgba(10, 38, 64, 0.00) 72.89%, #0A2640 97.87%)',
}));

export const LogoWrapper = styled(RowBox)(({ theme }) => ({
  alignItems: 'baseline',
  gap: '10px',
  marginRight: '40px',

  [theme.breakpoints.down('sm')]: {
    gap: 0,
  },
  [theme.breakpoints.only('md', 'sm')]: {
    marginRight: '20px',
  },
  [theme.breakpoints.only('xs')]: {
    marginRight: '10px',
  },
}));

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
