import React, { useEffect, useState } from 'react';
import { ColumnBox } from '../../Shared/ColumnBox';
import { Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

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
    <ColumnBox
      data-aos="fade-up"
      ref={ref}
      sx={{
        bgcolor: 'text.blue.dark',
        alignItems: 'center',
        textAlign: 'center',
        py: '96px',
        mt: '96px',
      }}
    >
      <ColumnBox sx={{ width: '842px', gap: '12px' }}>
        <Typography
          variant="h4"
          sx={{ color: 'text.grey.light', lineHeight: '32px' }}
        >
          Our numbers
        </Typography>
        <Typography
          variant="h1"
          sx={{ lineHeight: '72px', color: 'text.white' }}
        >
          Handshake infographic mass market crowdfunding iteration.
        </Typography>
      </ColumnBox>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '1000px',
        }}
      >
        {[1, 2, 3].map((item, index) => (
          <ColumnBox
            key={item}
            sx={{ alignItems: 'flex-start', width: '200px', mt: '84px' }}
          >
            <Typography variant="biggest" color="text.green.main">
              {numberRenderCondition(index)}
            </Typography>
            <Typography variant="h3" sx={{ color: 'text.grey.light' }}>
              Cool feature title
            </Typography>
          </ColumnBox>
        ))}
      </Box>
    </ColumnBox>
  );
};

export default OurNumbers;
