import { Typography } from '@mui/material';
import React from 'react';
// Locale Files
import { OurValuesItems } from '../../Constants/OurValuesItems';
import AboutTitleSection from '../../Shared/AboutTitleSection/AboutTitleSection';
import { Img } from '../../Shared/Img';
import {
  ListContainer,
  OurValuesContainer,
  TextContainer,
} from './OurValues.styles';

//Props for AboutTitleSection
const title = ' Our values';
const subtitle = 'Things in we believe';
const description = `Conversion angel investor entrepreneur first mover advantage.
Handshake infographic mass market crowdfunding iteration. Traction
stock user experience deployment beta innovator incubator focus.`;

const OurValues = () => {
  return (
    <OurValuesContainer data-aos="fade-up">
      <AboutTitleSection
        title={title}
        subtitle={subtitle}
        descr={description}
        colorTitle={'text.white'}
        colorSubTitle={'text.white'}
        colorDescr={'text.grey.light'}
      />
      {OurValuesItems.map(({ id, img, title, description }) => (
        <ListContainer key={id}>
          <Img src={img} width={150} height={151} />
          <TextContainer>
            <Typography
              variant="h2"
              sx={{ fontSize: '28px', color: 'text.white', lineHeight: '48px' }}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: 'text.grey.light', lineHeight: '32px' }}
            >
              {description}
            </Typography>
          </TextContainer>
        </ListContainer>
      ))}
    </OurValuesContainer>
  );
};

export default OurValues;
