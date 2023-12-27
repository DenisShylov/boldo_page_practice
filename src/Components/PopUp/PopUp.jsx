import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import React, { forwardRef, useState } from 'react';
import {
  CustomDialogContent,
  CustomInput,
  PopUpActions,
  PopUpText,
  StartNowBtn,
} from './PopUp.styles';
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopUp = ({ open, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <Dialog
        PaperProps={{ sx: { maxWidth: '893px', borderRadius: '50px' } }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ borderRadius: '50px' }}
      >
        <CustomDialogContent
        // sx={{
        //   display: 'flex',
        //   flexDirection: 'column',
        //   justifyContent: 'center',
        //   height: '893px',
        //   width: '893px',
        //   px: '87px',
        // }}
        >
          <PopUpText
            variant="h1"
            component="div"
            // sx={{
            //   display: 'flex',
            //   flexDirection: 'column',
            //   justifyContent: 'center',
            //   width: '719px',
            //   height: '140px',
            //   textAlign: 'center',
            // }}
            id="alert-dialog-slide-description"
          >
            An enterprise template to ramp up your company website
          </PopUpText>
          <PopUpActions sx={{ justifyContent: 'center', gap: '24px' }}>
            <CustomInput
              InputProps={{
                sx: {
                  border: '1px solid #DFDFDF ',
                  borderRadius: '50px',
                  width: { md: '290px', lg: '100%', xl: '100%' },
                },
              }}
              placeholder="Your email address"
              value={inputValue}
              onChange={({ target: { value } }) => setInputValue(value)}
            />
            <StartNowBtn>Start Now</StartNowBtn>
          </PopUpActions>
        </CustomDialogContent>
      </Dialog>
    </>
  );
};

export default PopUp;
