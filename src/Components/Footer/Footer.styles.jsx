import { InputBase, styled } from '@mui/material';

export const CustomInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.text.white,
  borderRadius: '240px',
  width: '370px',
  height: '56px',
  '& .MuiInputBase-input': {
    color: '#000',
    fontSize: '20px',
    fontFamily: 'Open Sans',
    lineHeight: '32px',
    paddingLeft: '32px',
    border: 0,
    outline: 0,
  },
}));
