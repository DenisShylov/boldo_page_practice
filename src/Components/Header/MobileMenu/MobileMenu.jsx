import React from 'react';
import { useNavigate } from 'react-router-dom';
// Locale Files
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link } from 'react-scroll';
import { NavItems } from '../../../Constants/NavItems';
import { LoginBtn } from '../Header.styles';

const MobileMenu = ({
  handleOpenDrawer,
  handleCloseDrawer,
  handleOpenPopUp,
}) => {
  const navigate = useNavigate();
  const handleHome = ({ currentTarget: { textContent } }) => {
    console.log(textContent);
    if (textContent === 'About') {
      navigate('/about');
      handleCloseDrawer(false);
    } else {
      navigate('/');
      handleCloseDrawer(false);
    }
  };
  const handleDrawerToggle = () => {
    handleCloseDrawer((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, my: 2 }}
        onClick={() => navigate('/')}
      >
        Boldo
      </Typography>
      <Divider />
      <List sx={{ display: 'flex', justifyContent: 'center' }}>
        {NavItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link
                style={{ display: ' contents' }}
                to={item}
                offset={-100}
                duration={500}
                smooth={true}
              >
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: 'Manrope',
                      fontWeight: 700,
                      textAlign: 'center',
                    },
                  }}
                  onClick={handleHome}
                  primary={item}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <LoginBtn
        sx={{ mb: '10px', bgcolor: '#F1F1F1', borderColor: 'grey' }}
        variant="outlined"
        onClick={handleOpenPopUp}
      >
        Log In
      </LoginBtn>
    </Box>
  );

  return (
    <Drawer
      anchor="top"
      variant="temporary"
      open={handleOpenDrawer}
      onClose={() => handleCloseDrawer(false)}
      PaperProps={{
        sx: {
          backgroundColor: '#F1F1F1',
        },
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        '& .MuiDrawer-paper': {
          display: 'flex',
          boxSizing: 'border-box',
          width: '100%',
          height: 'auto',
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default MobileMenu;
