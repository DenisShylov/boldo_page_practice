import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
// Locale Files
import { RowBox } from '../../Shared/CustomBox';
import { LogoBoldo, LogoText } from '../../Shared/Img';
import {
  BannerBtn,
  BannerContainer,
  BannerContent,
  BannerControl,
  BannerText,
  CustomInputBase,
  FooterContainer,
  MainText,
  Signature,
} from './Footer.styles';
import TableFooter from './TableFooter/TableFooter';

const Footer = () => {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down('lg'));
  const handleStartPage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const [inputValue, setInputValue] = useState('');

  return (
    <FooterContainer data-aos="fade-up">
      <BannerContainer>
        <BannerContent>
          <BannerText variant="h1">
            An enterprise template to ramp up your company website
          </BannerText>

          <BannerControl>
            <CustomInputBase
              placeholder="Your email address"
              value={inputValue}
              onChange={({ target: { value } }) => setInputValue(value)}
            />
            <BannerBtn>Start Now</BannerBtn>
          </BannerControl>
        </BannerContent>
      </BannerContainer>
      <RowBox sx={{ p: '0 93px 93px' }}>
        <Box sx={screenSize ? '' : { mr: '180px' }}>
          <RowBox sx={{ alignItems: 'center', gap: '11px' }}>
            <LogoBoldo sx={{ color: 'text.blue.dark' }} />
            <LogoText
              sx={{ color: 'text.blue.dark' }}
              onClick={handleStartPage}
            >
              Boldo
            </LogoText>
          </RowBox>
          <Box>
            <MainText variant="h5">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </MainText>
            <Signature variant="h5">All rights reserved.</Signature>
          </Box>
        </Box>
        <TableFooter />
      </RowBox>
    </FooterContainer>
  );
};

export default Footer;
