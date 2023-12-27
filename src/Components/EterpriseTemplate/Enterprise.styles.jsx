import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  styled,
} from '@mui/material';
import { RowBox } from '../../Shared/CustomBox';

export const Img = styled('img')(({ theme }) => ({}));

export const EnterpriseTemplateContainer = styled(Box)(({ theme }) => ({
  marginTop: '220px',
  padding: ' 96px 150px',
  backgroundColor: theme.palette.text.blue.dark,
}));

export const TitleContainer = styled(RowBox)(({ theme }) => ({
  alignItems: 'end',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  width: '716px',
  height: '139px',
  fontSize: '48px',
  lineHeight: '72px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '42px',
    lineHeight: '42px',
  },

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    width: '300px',
    fontSize: '24px',
    lineHeight: '26px',
  },
}));

export const ArrowIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.text.white,
  '&:hover': { backgroundColor: theme.palette.text.white },
  '&:disabled': {
    backgroundColor: theme.palette.text.grey.lightest,
  },
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  height: 'fit-content',
  maxWidth: '350px',
  minWidth: '325px',
  borderRadius: '12px',
}));

export const CustomCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '40px',
  gap: '40px',
}));

export const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '300px',
  height: '58px',
}));
