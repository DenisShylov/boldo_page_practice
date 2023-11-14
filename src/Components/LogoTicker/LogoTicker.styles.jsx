import { Typography, styled } from '@mui/material';
import { ReactComponent as boldo } from '../../Assets/boldo.svg';
import { ReactComponent as presto } from '../../Assets/presto.svg';

export const BoldoLogo = styled(boldo)(({ theme }) => ({
  color: theme.palette.text.white,
  width: '23px',
  height: '33px',
}));

export const PrestoLogo = styled(presto)(() => ({
  width: '23px',
  height: '33px',
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  fontWeight: 700,
  lineHeight: '28px',
}));
