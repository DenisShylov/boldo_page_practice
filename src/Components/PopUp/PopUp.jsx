import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import React, { forwardRef, useState } from 'react';
// Locale Files
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
        <CustomDialogContent>
          <PopUpText
            variant="h1"
            component="div"
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
                  width: {
                    xs: '290px',
                    sm: '290px',
                    md: '100%',
                    lg: '100%',
                    xl: '100%',
                  },
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
