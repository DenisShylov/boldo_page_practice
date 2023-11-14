import { AppBar, Box, Container, Toolbar } from '@mui/material';
import React from 'react';
//Local Files
import { NavItems } from '../../Constants/NavItems';
import { LogoBoldo, LogoText } from '../../Shared/Logo';
import { LoginBtn, NavItemBtn, ToolbarLogo } from './Header.styles';

const Header = () => {
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <ToolbarLogo>
            <LogoBoldo />
            <LogoText>Boldo</LogoText>
          </ToolbarLogo>
          <Box sx={{ display: 'flex', gap: '40px' }}>
            {NavItems.map((item) => (
              <NavItemBtn>{item}</NavItemBtn>
            ))}
            <LoginBtn variant="contained">Log In</LoginBtn>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
