import React from 'react';
import { Typography } from '@mui/material';
// Locale Files
import { ColumnBox, RowBox } from '../../Shared/CustomBox';
import { Img } from '../../Shared/Img';
import img1 from '../../Assets/ManTrash.png';
import img2 from '../../Assets/cardImg3.png';
import img3 from '../../Assets/cardImg2.png';
const OurValues = () => {
  return (
    <ColumnBox
      data-aos="fade-up"
      sx={{
        alignItems: 'center',
        bgcolor: 'text.blue.dark',
        py: '120px',
        mt: '120px',
        mb: '27px',
      }}
    >
      <ColumnBox
        sx={{
          textAlign: 'left',
          width: '799px',
          gap: '32px',
          // mt: '120px',
        }}
      >
        <ColumnBox sx={{ gap: '12px' }}>
          <Typography variant="h4" color="text.white">
            Our values
          </Typography>
          <Typography
            variant="h1"
            sx={{ lineHeight: '72px', color: 'text.white' }}
          >
            Things in we believe
          </Typography>
        </ColumnBox>
        <Typography
          variant="h4"
          color="text.grey.light"
          sx={{ width: '799px', lineHeight: '32px' }}
        >
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </Typography>
      </ColumnBox>

      <RowBox sx={{ gap: '50px', mt: '72px' }}>
        <Img src={img1} width={150} height={151} />
        <ColumnBox sx={{ width: '602px', gap: '16px ' }}>
          <Typography
            variant="h2"
            sx={{ fontSize: '28px', color: 'text.white', lineHeight: '48px' }}
          >
            We are commited.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: 'text.grey.light', lineHeight: '32px' }}
          >
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration.{' '}
          </Typography>
        </ColumnBox>
      </RowBox>
      <RowBox sx={{ gap: '50px', mt: '72px' }}>
        <Img src={img2} width={150} height={151} />
        <ColumnBox sx={{ width: '602px', gap: '16px ' }}>
          <Typography
            variant="h2"
            sx={{ fontSize: '28px', color: 'text.white', lineHeight: '48px' }}
          >
            We are responsible.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: 'text.grey.light', lineHeight: '32px' }}
          >
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration.{' '}
          </Typography>
        </ColumnBox>
      </RowBox>
      <RowBox sx={{ gap: '50px', mt: '72px' }}>
        <Img src={img3} width={150} height={151} />
        <ColumnBox sx={{ width: '602px', gap: '16px ' }}>
          <Typography
            variant="h2"
            sx={{ fontSize: '28px', color: 'text.white', lineHeight: '48px' }}
          >
            We aim for progress.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: 'text.grey.light', lineHeight: '32px' }}
          >
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration.{' '}
          </Typography>
        </ColumnBox>
      </RowBox>
    </ColumnBox>
  );
};

export default OurValues;
