import { Typography, styled } from '@mui/material';
import { ReactComponent as boldo } from '../Assets/boldo.svg';

export const LogoBoldo = styled(boldo)(({ theme }) => ({
  color: theme.palette.success.main,
  width: '26px',
  height: '33px',
}));
export const LogoText = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  fontFamily: 'Manrope',
  fontSize: '43.25px',
  fontWeight: 700,
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
  },
}));

export const Img = styled('img')(() => ({}));
