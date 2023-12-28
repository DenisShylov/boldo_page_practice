import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// Locale Files
import { ColumnBox } from '../../Shared/CustomBox';
import {
  BigTitle,
  NumberTickerContainer,
  OurNumberContainer,
  TextContainer,
} from './OurNumbers.styles';

const OurNumbers = () => {
  const { ref, inView } = useInView();
  const [firstNumber, setFirstNumber] = useState(120);
  const [secondNumber, setSecondNumber] = useState(10000);
  const [thirdNumber, setThirdNumber] = useState(240);

  useEffect(() => {
    const timer = setInterval(() => {
      if (inView) {
        setFirstNumber((prev) => (prev <= 0 ? 120 : prev - 1));
        setSecondNumber((prev) => (prev <= 0 ? 10000 : prev - 1));
        setThirdNumber((prev) => (prev <= 0 ? 240 : prev - 1));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [inView]);

  const numberRenderCondition = (index) => {
    if (index === 0) {
      return `${firstNumber}m`;
    } else if (index === 1) {
      return secondNumber;
    } else {
      return thirdNumber;
    }
  };

  return (
    <OurNumberContainer data-aos="fade-up" ref={ref}>
      <TextContainer>
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
              {numberRenderCondition(index)}
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
