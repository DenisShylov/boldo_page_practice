import { styled } from '@mui/material';
import { RowBox } from '../../Shared/CustomBox';

export const HeroContainer = styled(RowBox)(({ theme }) => ({
  alignItems: 'center',
  marginTop: '162px',
  padding: '0 100px',
  justifyContent: 'space-between',
  marginBottom: '56px',

  [theme.breakpoints.down('md')]: {
    marginTop: '100px',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 30px',
  },
}));
