import React from 'react';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';
import { Box, Typography } from '@mui/material';
import { Img } from '../../Shared/Img';
import card1 from '../../Assets/AboutImages/Image1.png';
import card2 from '../../Assets/AboutImages/Image2.png';
import card3 from '../../Assets/AboutImages/Image3.png';

const OurTeam = () => {
  return (
    <ColumnBox data-aos="fade-up" sx={{ alignItems: 'center', mt: '96px' }}>
      <ColumnBox
        sx={{
          textAlign: 'left',
          width: '842px',
          gap: '32px',
        }}
      >
        <ColumnBox sx={{ gap: '12px' }}>
          <Typography variant="h4" color="text.grey.lightest">
            Our team
          </Typography>
          <Typography variant="h1" sx={{ lineHeight: '72px' }}>
            The leadership team
          </Typography>
        </ColumnBox>
        <Typography
          variant="h4"
          color="text.grey.lightest"
          sx={{ width: '799px', lineHeight: '32px' }}
        >
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </Typography>
      </ColumnBox>
      <RowBox sx={{ gap: '51px', mt: '51px' }}>
        <ColumnBox sx={{ gap: '24px' }}>
          <Img src={card1} />
          <ColumnBox sx={{ gap: '12px' }}>
            <Typography
              variant="h2"
              sx={{ fontSize: '28px', lineHeight: '48px' }}
            >
              Michael Scott
            </Typography>
            <Typography
              variant="h4"
              color="text.grey.lightest"
              sx={{ lineHeight: '32px' }}
            >
              General Manager
            </Typography>
          </ColumnBox>
        </ColumnBox>
        <ColumnBox sx={{ gap: '24px' }}>
          <Img src={card2} />
          <ColumnBox sx={{ gap: '12px' }}>
            <Typography
              variant="h2"
              sx={{ fontSize: '28px', lineHeight: '48px' }}
            >
              Dwight Schrute
            </Typography>
            <Typography
              variant="h4"
              color="text.grey.lightest"
              sx={{ lineHeight: '32px' }}
            >
              General Manager
            </Typography>
          </ColumnBox>
        </ColumnBox>
        <ColumnBox sx={{ gap: '24px' }}>
          <Img src={card3} />
          <ColumnBox sx={{ gap: '12px' }}>
            <Typography
              variant="h2"
              sx={{ fontSize: '28px', lineHeight: '48px' }}
            >
              Pam Beetsley
            </Typography>
            <Typography
              variant="h4"
              color="text.grey.lightest"
              sx={{ lineHeight: '32px' }}
            >
              General Manager
            </Typography>
          </ColumnBox>
        </ColumnBox>
      </RowBox>
    </ColumnBox>
  );
};

export default OurTeam;
