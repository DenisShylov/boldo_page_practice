import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  styled,
} from '@mui/material';

export const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '893px',
  width: '893px',
  paddingInline: '87px',
  [theme.breakpoints.down('md')]: {
    alignItems: ' center',
    width: 'auto',
    height: '500px',
  },
}));

export const PopUpText = styled(DialogContentText)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '719px',
  height: '140px',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    width: '300px',

    fontSize: '28px',

    lineHeight: '28px',
  },
}));

export const PopUpActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: 'center',
  gap: '24px',
  [theme.breakpoints.down('xl')]: {
    marginTop: '20px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const CustomInput = styled(TextField)(({ theme }) => ({
  backgroundColor: '#DFDFDF',
  borderRadius: '240px',
  height: '56px',
  width: '370px',

  [theme.breakpoints.down('md')]: {
    width: '290px',
  },
}));

export const StartNowBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.text.blue.dark,
  borderRadius: '56px',
  '&:hover': {
    backgroundColor: '#86c7a6',
  },
}));
