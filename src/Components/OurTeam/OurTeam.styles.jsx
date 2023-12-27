import { styled } from '@mui/material';
import { RowBox } from '../../Shared/CustomBox';

export const CardContainer = styled(RowBox)(({ theme }) => ({
  gap: '51px',
  marginTop: '51px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));
