import React from 'react';
import { ColumnBox } from '../CustomBox';
import { Typography } from '@mui/material';
import {
  AboutTitleContainer,
  Description,
  Subtitle,
} from './AboutTitleSection.styles';

const AboutTitleSection = ({
  title,
  subtitle,
  descr,
  colorTitle,
  colorSubTitle,
  colorDescr,
}) => {
  return (
    <AboutTitleContainer data-aos="fade-up">
      <ColumnBox sx={{ gap: '12px' }}>
        <Typography variant="h4" color={colorTitle || 'text.grey.lightest'}>
          {title}
        </Typography>
        <Subtitle variant="h1" color={colorSubTitle}>
          {subtitle}
        </Subtitle>
      </ColumnBox>
      <Description variant="h4" color={colorDescr || 'text.grey.lightest'}>
        {descr}
      </Description>
    </AboutTitleContainer>
  );
};

export default AboutTitleSection;
