import MenuIcon from '@mui/icons-material/Menu';
import { Box, Toolbar } from '@mui/material';
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
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  const handleNavigate = () => {
    navigate('/about');
  };

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
          <BurgerBtn color="inherit" edge="start" onClick={handleMenu}>
            <MenuIcon />
          </BurgerBtn>
          {menu && (
            <MobileMenu handleOpen={handleOpen} handleClose={handleMenu} />
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
            <LoginBtn variant="contained" onClick={handleOpen}>
              Log In
            </LoginBtn>
          </NavContainer>
        </Toolbar>
      </CustomAppBar>
      <PopUp onClose={handleClose} open={open} />
    </Box>
  );
};

export default Header;
