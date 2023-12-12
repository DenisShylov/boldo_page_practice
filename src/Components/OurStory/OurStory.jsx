import React from 'react';
import { ColumnBox } from '../../Shared/ColumnBox';
import { Typography } from '@mui/material';

const OurStory = () => {
  return (
    <ColumnBox
      data-aos="fade-up"
      sx={{ textAlign: 'left', width: '842px', gap: '32px' }}
    >
      <ColumnBox sx={{ gap: '12px' }}>
        <Typography variant="h4" color="text.grey.lightest">
          Our story
        </Typography>
        <Typography variant="h1" sx={{ lineHeight: '72px' }}>
          Handshake infographic mass market crowdfunding iteration.
        </Typography>
      </ColumnBox>
      <Typography
        variant="h4"
        color="text.grey.lightest"
        sx={{ width: '799px', lineHeight: '32px' }}
      >
        Conversion angel investor entrepreneur first mover advantage. Handshake
        infographic mass market crowdfunding iteration. Traction stock user
        experience deployment beta innovator incubator focus. Sales user
        experience branding growth hacking holy grail monetization conversion
        prototype stock network effects. Learning curve network effects return
        on investment bootstrapping business-to-consumer.
      </Typography>
    </ColumnBox>
  );
};

export default OurStory;
