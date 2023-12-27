import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import React from 'react';
// Locale Files
import FaqImg from '../../Assets/FAQ.png';
import {
  AccordionContent,
  AccordionIcon,
  ContentWrapper,
  CustomAccordion,
  FAQContainer,
  Img,
  Text,
} from './FAQ.styles';

const FAQ = () => {
  return (
    <FAQContainer data-aos="fade-up">
      <Img src={FaqImg} />
      <ContentWrapper>
        <Text variant="h2" component={'div'}>
          We connect our customers <br /> with the best, and help them keep
          up-and stay open.
        </Text>
        <Box>
          <CustomAccordion>
            <AccordionSummary
              sx={{ height: '50px' }}
              expandIcon={<AccordionIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AccordionContent variant={'h4'}>
                We connect our customers with the best?
              </AccordionContent>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <AccordionSummary
              expandIcon={<AccordionIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <AccordionContent variant={'h4'}>
                Android research & development rockstar?{' '}
              </AccordionContent>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
        </Box>
      </ContentWrapper>
    </FAQContainer>
  );
};

export default FAQ;
