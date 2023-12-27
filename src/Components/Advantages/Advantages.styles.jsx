import { Button, Typography, styled } from '@mui/material';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';

export const AdvantagesContainer = styled(ColumnBox)(({ theme }) => ({
  gap: '40px',

  [theme.breakpoints.down('lg')]: {
    gap: '25px',
    marginBottom: '35px',
  },
}));

export const TextContainer = styled(ColumnBox)(({ theme }) => ({
  gap: '16px',
  width: '567px',
  textAlign: 'left',

  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
  },

  [theme.breakpoints.only('sm')]: {
    width: '546px',
  },

  [theme.breakpoints.only('xs')]: {
    width: '300px',
  },
}));

export const BigText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  lineHeight: '72px',

  [theme.breakpoints.down('sm')]: {
    lineHeight: '30px',
  },
}));

export const BtnWrapper = styled(RowBox)(({ theme }) => ({
  justifyContent: 'flex-start',
  gap: '24px',
  height: '60px',

  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
}));

export const BuyTemplateBtn = styled(Button)(({ theme }) => ({
  fontSize: '20px',
  color: theme.palette.text.blue.dark,
  backgroundColor: theme.palette.success.main,
  fontWeight: 700,
  '&:hover': {
    backgroundColor: theme.palette.success.main,
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    padding: '5px 15px',
  },
}));

export const ExploreBtn = styled(Button)(({ theme }) => ({
  fontSize: '20px',
  color: theme.palette.text.white,
  padding: '16px 56px',
  border: `2px solid ${theme.palette.text.white}`,
  fontWeight: 700,
  backgroundColor: 'transparent',

  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    padding: '5px 15px',
  },
}));
