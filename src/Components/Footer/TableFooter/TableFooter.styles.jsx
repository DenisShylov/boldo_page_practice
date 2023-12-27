import { TableCell, TableContainer, styled } from '@mui/material';

export const CustomTableContainer = styled(TableContainer)(({ theme }) => ({
  width: '642px',
  boxShadow: 'none',
  [theme.breakpoints.up('xs', 'sm', 'md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg', 'xl')]: {
    display: 'table',
  },
}));

export const CustomTableCell = styled(TableCell)({
  border: 0,
  width: '150px',
  fontFamily: 'Open Sans',
  fontSize: '20px',
});

export const Hiring = styled('span')(({ theme }) => ({
  position: 'absolute',
  bottom: '115px',
  left: '310px',
  backgroundColor: theme.palette.success.main,
  color: theme.palette.text.blue.dark,
  borderRadius: '120px',
  padding: '1px 14px',
  fontSize: '13px',
  fontFamily: 'Open Sans',
  fontWeight: 700,
}));
