import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
//Local Files
import { NavItems } from '../../Constants/NavItems';
import { LogoBoldo, LogoText } from '../../Shared/Logo';
import { LoginBtn, NavItemBtn, ToolbarLogo } from './Header.styles';

const Header = () => {
  return (
    <Container>
      <AppBar
        position="static"
        sx={{
          p: {
            xs: '56px 30px 0 30px',
            sm: '56px 100px 0 100px',
            md: '56px 100px 0 100px',
            lg: '56px 100px 0 100px',
            xl: '56px 100px 0 100px',
          },
        }}
      >
        <Toolbar>
          <ToolbarLogo>
            <LogoBoldo />
            <LogoText>Boldo</LogoText>
          </ToolbarLogo>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 2,
              display: {
                xs: 'block',
                sm: 'block',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
              },
              gap: '40px',
            }}
          >
            {NavItems.map((item) => (
              <NavItemBtn key={item}>{item}</NavItemBtn>
            ))}
            <LoginBtn variant="contained">Log In</LoginBtn>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
