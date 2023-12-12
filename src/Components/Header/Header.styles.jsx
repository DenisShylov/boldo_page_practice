import { Button, styled } from '@mui/material';
import { Link } from 'react-scroll';

export const ToolbarLogo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  gap: '11px',
}));
export const NavItemBtn = styled(Link)(({ theme }) => ({
  color: theme.palette.text.white,
  fontFamily: ['Open Sans', 'Roboto'].join(','),
  fontWeight: 600,
  lineHeight: '28px',
  padding: 0,
  cursor: 'pointer',
}));
export const LoginBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.text.white,
  padding: '8px 40px',
  color: theme.palette.text.blue.dark,
  fontFamily: ['Open Sans', 'Roboto'].join(','),
  fontWeight: 700,
  lineHeight: '24px',
}));
