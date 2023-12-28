import { Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
// Locale Files
import {
  AdvantagesContainer,
  BigText,
  BtnWrapper,
  BuyTemplateBtn,
  ExploreBtn,
  TextContainer,
} from './Advantages.styles';

const Advantages = () => {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down('sm'));
  const titleTypographyVariant = screenSize ? 'h3' : 'h1';
  const descriptionTypographyVariant = screenSize ? 'h6' : 'h5';

  return (
    <AdvantagesContainer>
      <TextContainer>
        <BigText variant={titleTypographyVariant}>
          Save time by building <br /> fast with Boldo Template
        </BigText>
        <Typography
          variant={descriptionTypographyVariant}
          sx={{ color: 'text.grey.light', lineHeight: '28px' }}
        >
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </Typography>
      </TextContainer>
      <BtnWrapper>
        <BuyTemplateBtn>Buy template</BuyTemplateBtn>
        <ExploreBtn>Explore</ExploreBtn>
      </BtnWrapper>
    </AdvantagesContainer>
  );
};

export default Advantages;
