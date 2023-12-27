import React from 'react';
import { useNavigate } from 'react-router-dom';
// Locale Files
import { NavItems } from '../../../Constants/NavItems';
import { ColumnBox } from '../../../Shared/CustomBox';
import { LoginBtn, NavItemBtn } from '../Header.styles';

const MobileMenu = ({ handleOpen, handleClose, screenSize }) => {
  const navigate = useNavigate();

  const handleHome = ({ target: { id } }) => {
    if (id === 'About_2') {
      navigate('/about');
      handleClose();
    } else {
      navigate('/');
      handleClose();
    }
  };
  return (
    <ColumnBox
      sx={
        screenSize
          ? { display: 'none' }
          : {
              position: 'absolute',
              top: '40px',
              right: '-18px',
              border: '1px solid',
              borderRadius: '10px',
              p: '5px ',
              textAlign: 'center',
            }
      }
    >
      {NavItems.map((item, index) => (
        <NavItemBtn
          to={item}
          offset={-100}
          duration={500}
          smooth={true}
          key={item}
          id={`${item}_${index}`}
          onClick={handleHome}
        >
          {item}
        </NavItemBtn>
      ))}
      <LoginBtn variant="outlined" onClick={handleOpen}>
        Log In
      </LoginBtn>
    </ColumnBox>
  );
};

export default MobileMenu;
