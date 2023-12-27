import { Card, styled } from '@mui/material';
import { RowBox } from '../../Shared/CustomBox';

export const CardContainer = styled(RowBox)(({ theme }) => ({
  padding: '80px 150px',
  gap: '100px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '50px',
  },
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  width: '300px',

  [theme.breakpoints.only('md')]: {
    width: '250px',
  },
}));
