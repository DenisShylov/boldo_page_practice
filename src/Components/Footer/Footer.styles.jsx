import { Button, InputBase, Typography, styled } from '@mui/material';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';
import Ellipse from '../../Assets/Ellipse_small.png';

export const FooterContainer = styled(ColumnBox)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '100px',
  gap: '84px',
}));

export const CustomInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.text.white,
  borderRadius: '240px',
  maxWidth: '370px',
  width: '370px',
  height: '56px',

  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },
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

export const BannerContainer = styled(ColumnBox)(({ theme }) => ({
  justifyContent: 'center',
  padding: '93px',
  gap: '84px',
}));

export const BannerContent = styled(ColumnBox)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.text.blue.dark,
  backgroundImage: `url(${Ellipse})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '100% 0',
  width: 'auto',
  height: '391px',
  borderRadius: '12px',
  [theme.breakpoints.up('sm')]: {
    width: '1200px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '400px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
}));

export const BannerControl = styled(RowBox)(({ theme }) => ({
  gap: '24px',
  marginTop: '50px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const BannerBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.text.blue.dark,
  borderRadius: '56px',
  '&:hover': {
    backgroundColor: '#86c7a6',
  },

  [theme.breakpoints.down('lg')]: {
    padding: '5px 20px',
  },
}));

export const BannerText = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  lineHeight: '72px',
  width: '716px',
  textAlign: 'center',
  color: theme.palette.text.white,
  height: '139px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
    lineHeight: '36px',
    width: '190px',
  },
}));

export const MainText = styled(Typography)(({ theme }) => ({
  width: '300px',
  height: '84px',
  marginTop: '40px',
  color: theme.palette.text.grey.lightest,
}));

export const Signature = styled(Typography)(({ theme }) => ({
  marginTop: '64px',
  color: theme.palette.text.grey.lightest,
  [theme.breakpoints.down('lg')]: {
    marginTop: 0,
  },
}));
