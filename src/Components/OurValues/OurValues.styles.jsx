import { styled } from '@mui/material';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';

export const OurValuesContainer = styled(ColumnBox)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.text.blue.dark,
  padding: '120px 0',
  marginTop: '120px',
  marginBottom: '27px',
}));

export const ListContainer = styled(RowBox)(({ theme }) => ({
  gap: '50px',
  marginTop: '72px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    width: '300px',
    border: `1px solid ${theme.palette.text.grey.light}`,
    borderRadius: '20px',
    padding: '30px',
  },
}));

export const TextContainer = styled(ColumnBox)(({ theme }) => ({
  width: '602px',
  gap: '16px ',
  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },
}));
