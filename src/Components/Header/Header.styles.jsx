import { AppBar, Box, Button, IconButton, styled } from '@mui/material';
import { Link } from 'react-scroll';

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  padding: '56px 100px 0 100px',
  [theme.breakpoints.down('sm')]: {
    padding: '56px 30px 0 30px',
  },
}));

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
  '&:hover': {
    backgroundColor: theme.palette.text.white,
  },
}));

export const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const BurgerBtn = styled(IconButton)(({ theme }) => ({
  marginRight: '16px',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));
