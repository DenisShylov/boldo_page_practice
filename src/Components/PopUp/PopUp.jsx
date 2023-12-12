import React, { forwardRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
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
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '893px',
            width: '893px',
            px: '87px',
          }}
        >
          <DialogContentText
            variant="h1"
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '719px',
              height: '140px',
              textAlign: 'center',
            }}
            id="alert-dialog-slide-description"
          >
            An enterprise template to ramp up your company website
          </DialogContentText>
          <DialogActions sx={{ justifyContent: 'center', gap: '24px' }}>
            <TextField
              InputProps={{
                sx: { border: '1px solid #DFDFDF ', borderRadius: '50px' },
              }}
              placeholder="Your email address"
              value={inputValue}
              onChange={({ target: { value } }) => setInputValue(value)}
              sx={{
                bgcolor: '#DFDFDF',
                borderRadius: '240px',
                width: '370px',
                height: '56px',
              }}
            />
            <Button
              sx={{
                bgcolor: 'success.main',
                color: 'text.blue.dark',
                borderRadius: '56px',
                '&:hover': {
                  bgcolor: '#86c7a6',
                },
              }}
            >
              Start Now
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopUp;
