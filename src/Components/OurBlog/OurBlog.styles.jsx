import { Button, Card, styled } from '@mui/material';
import { RowBox } from '../../Shared/CustomBox';

export const CardContainer = styled(Card)(({ theme }) => ({
  maxWidth: '300px',

  [theme.breakpoints.down('lg')]: {
    border: `1px solid ${theme.palette.text.grey.light}`,
    borderRadius: '10px',
  },
}));

export const Wrapper = styled(RowBox)(({ theme }) => ({
  marginTop: 0,
  gap: '50px',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    marginTop: '30px',
  },
}));

export const LoadMoreBtn = styled(Button)(({ theme }) => ({
  border: '2px solid',
  borderRadius: '56px',
  color: theme.palette.text.blue.dark,
  marginTop: '84px',
}));
