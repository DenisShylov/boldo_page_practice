import { Box, styled } from '@mui/material';
import { RowBox } from '../../Shared/CustomBox';

export const StatisticCardsContainer = styled(RowBox)(({ theme }) => ({
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: '25px 0',
  width: '494px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '300px',
  },

  [theme.breakpoints.down('md')]: {
    gap: '20px',
  },
}));

export const CardImg = styled('img')(() => ({}));

export const Card1 = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingInline: 0,
  height: '231.898px',
  borderRadius: '15.03px',
  backgroundColor: 'rgba(255, 255, 255, 0.18)',
  backdropFilter: "blur('34.35533142089844px')",

  [theme.breakpoints.down('sm')]: {
    width: '300px',
    paddingInline: '10px',
  },
}));

export const Card2 = styled(Box)(({ theme }) => ({
  height: '165px',
  marginRight: 'auto',
  width: '192px',
  borderRadius: '15.03px',
  backgroundColor: 'rgba(255, 255, 255, 0.18)',
  backdropFilter: "blur('34.35533142089844px')",

  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
}));

export const Card3 = styled(Box)(({ theme }) => ({
  height: '165px',
  width: '262px',
  borderRadius: '15.03px',
  backgroundColor: 'rgba(255, 255, 255, 0.18)',
  backdropFilter: "blur('34.35533142089844px')",

  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
}));

export const CardLineWrapper = styled(RowBox)(({ theme }) => ({
  alignItems: 'center',
  gap: '14.3px',
  marginLeft: '29px',
}));

export const CardLineSmall = styled(Box)(({ theme }) => ({
  width: '54px',
  height: '11.777px',
  borderRadius: ' 14.132px',
  backgroundColor: '#95ABBC',
}));

export const CardLineBig = styled(Box)(({ theme }) => ({
  height: '11.777px',
  borderRadius: '14.132px',
}));

export const LineContainer = styled(RowBox)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: '25px',
}));

export const Line = styled(Box)(({ theme }) => ({
  width: '68px',
  height: '8px',
  backgroundColor: '#95ABBC',
  borderRadius: '14.132px',
}));
