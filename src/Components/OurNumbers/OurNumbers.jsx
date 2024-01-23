import { Typography } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';
// Locale Files
import CountUp from 'react-countup';
import { ColumnBox } from '../../Shared/CustomBox';
import {
  BigTitle,
  NumberTickerContainer,
  OurNumberContainer,
  TextContainer,
} from './OurNumbers.styles';

const OurNumbers = () => {
  const { ref, inView } = useInView();

  const numberRenderCondition = (index) => {
    if (index === 0) {
      return <CountUp start={0} end={120} />;
    } else if (index === 1) {
      return <CountUp start end={10000} />;
    } else {
      return <CountUp start={0} end={240} />;
    }
  };

  return (
    <OurNumberContainer data-aos="fade-up" ref={ref}>
      <TextContainer>
        <CountUp start={0} end={120} />
        <Typography
          variant="h4"
          sx={{ color: 'text.grey.light', lineHeight: '32px' }}
        >
          Our numbers
        </Typography>
        <BigTitle variant="h1">
          Handshake infographic mass market crowdfunding iteration.
        </BigTitle>
      </TextContainer>
      <NumberTickerContainer>
        {[1, 2, 3].map((item, index) => (
          <ColumnBox
            key={item}
            sx={{ alignItems: 'flex-start', width: '200px', mt: '84px' }}
          >
            <Typography variant="biggest" color="text.green.main">
              {inView ? numberRenderCondition(index) : null}
              {index === 0 ? (
                <Typography component={'span'} sx={{ fontSize: 'inherit' }}>
                  m
                </Typography>
              ) : null}
            </Typography>
            <Typography variant="h3" color="text.grey.light">
              Cool feature title
            </Typography>
          </ColumnBox>
        ))}
      </NumberTickerContainer>
    </OurNumberContainer>
  );
};

export default OurNumbers;
