import MenuIcon from '@mui/icons-material/Menu';
import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
//Local Files
import { useNavigate } from 'react-router-dom';
import { NavItems } from '../../Constants/NavItems';
import { LogoBoldo, LogoText } from '../../Shared/Img';
import PopUp from '../PopUp/PopUp';
import {
  BurgerBtn,
  CustomAppBar,
  LoginBtn,
  NavContainer,
  NavItemBtn,
  ToolbarLogo,
} from './Header.styles';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
  const [openPopUp, setOpenPopUp] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenPopUp = () => setOpenPopUp((prev) => !prev);
  const handleClosePopUp = () => setOpenPopUp(false);

  const handleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavigate = () => {
    navigate('/about');
  };

  useEffect(() => {
    if (screenSize) {
      setMobileOpen(false);
    }
  }, [screenSize]);

  useEffect(() => {
    document
      .querySelector('#About_2')
      .addEventListener('click', handleNavigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ m: 0, position: 'relative' }}>
      <CustomAppBar position="static">
        <Toolbar>
          <ToolbarLogo>
            <LogoBoldo />
            <LogoText sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              Boldo
            </LogoText>
          </ToolbarLogo>
          <BurgerBtn
            color="inherit"
            edge="start"
            aria-label="open drawer"
            onClick={handleMenu}
          >
            <MenuIcon />
          </BurgerBtn>
          {mobileOpen && (
            <MobileMenu
              handleOpenDrawer={mobileOpen}
              handleCloseDrawer={setMobileOpen}
              handleOpenPopUp={handleOpenPopUp}
            />
          )}
          <NavContainer>
            {NavItems.map((item, index) => (
              <NavItemBtn
                to={item}
                offset={-100}
                duration={500}
                smooth={true}
                key={item}
                id={`${item}_${index}`}
              >
                {item}
              </NavItemBtn>
            ))}
            <LoginBtn variant="contained" onClick={handleOpenPopUp}>
              Log In
            </LoginBtn>
          </NavContainer>
        </Toolbar>
      </CustomAppBar>
      <PopUp onClose={handleClosePopUp} open={openPopUp} />
    </Box>
  );
};

export default Header;
