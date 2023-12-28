import { Accordion, Typography, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';

export const FAQContainer = styled(ColumnBox)(({ theme }) => ({
  alignItems: 'center',
  padding: '124px 150px 158px 150px',
}));

export const AccordionIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  backgroundColor: theme.palette.text.blue.dark,
  color: theme.palette.text.white,
  borderRadius: '50%',
}));

export const Img = styled('img')(({ theme }) => ({
  width: '1100px',

  [theme.breakpoints.down('xl')]: {
    width: '1000px',
  },
  [theme.breakpoints.only('sm')]: {
    width: '700px',
  },
  [theme.breakpoints.only('xs')]: {
    width: '350px',
  },
}));

export const ContentWrapper = styled(RowBox)(({ theme }) => ({
  marginTop: '56px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  width: '100%',
  gap: '100px',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: '30px',
    width: '300px',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  lineHeight: '56px',
  width: '500px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '24px',
    width: '300px',
  },
  [theme.breakpoints.only('md')]: {
    lineHeight: '30px',
  },

  [theme.breakpoints.down('md')]: {
    lineHeight: '24px',
  },
}));

export const CustomAccordion = styled(Accordion)(({ theme }) => ({
  width: '500px',

  [theme.breakpoints.only('md')]: {
    width: '400px',
  },

  [theme.breakpoints.down('md')]: {
    width: '300px',
  },
}));

export const AccordionContent = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '32px',
  width: 'auto',

  [theme.breakpoints.down('lg')]: {
    width: '400px',
    fontSize: '16px',
  },

  [theme.breakpoints.only('xs')]: {
    width: '336px',
  },
}));
