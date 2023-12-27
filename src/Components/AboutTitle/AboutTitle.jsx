import { Typography } from '@mui/material';
import React from 'react';
// Locale Files
import {
  Subtitle,
  Title,
  TitleContainer,
  TitleText,
} from './AboutTitle.styles';

const AboutTitle = () => {
  return (
    <TitleContainer>
      {/* title */}
      <Title>
        <Typography variant="h4" color={'text.grey.light'}>
          About
        </Typography>
        <TitleText variant="big">
          We love to make great things, things that matter.
        </TitleText>
      </Title>
      {/* SubTitle */}
      <Subtitle variant="h5">
        Funding handshake buyer business-to-business metrics iPad partnership.
        First mover advantage innovator success deployment non-disclosure.
      </Subtitle>
    </TitleContainer>
  );
};

export default AboutTitle;
