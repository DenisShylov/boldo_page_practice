import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
//Local Files
import { useNavigate } from 'react-router-dom';
import { NavItems } from '../../Constants/NavItems';
import { LogoBoldo, LogoText } from '../../Shared/Img';
import PopUp from '../PopUp/PopUp';
import { LoginBtn, NavItemBtn, ToolbarLogo } from './Header.styles';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };
  useEffect(() => {
    document
      .querySelector('#About_2')
      .addEventListener('click', handleNavigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ m: 0 }}>
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
            <LogoText sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              Boldo
            </LogoText>
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
          </Box>
        </Toolbar>
      </AppBar>
      <PopUp onClose={handleClose} open={open} />
    </Box>
  );
};

export default Header;
