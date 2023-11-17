import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import React from 'react';
import { Img } from '../../Shared/Img';
import FaqImg from '../../Assets/FAQ.png';
import { AccordionIcon } from './FAQ.styles';
import { BasicLayout } from '../../Shared/BasicLayout';
const FAQ = () => {
  return (
    <BasicLayout
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        p: '124px 150px 158px 150px',
      }}
    >
      <Img src={FaqImg} sx={{ width: '1100px' }} />
      <BasicLayout
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: '100px',
          mt: '56px',
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          component={'div'}
          sx={{ lineHeight: '56px', width: '500px' }}
        >
          We connect our customers <br /> with the best, and help them keep
          up-and stay open.
        </Typography>
        <Box>
          <Accordion sx={{ width: '500px' }}>
            <AccordionSummary
              sx={{ height: '50px' }}
              expandIcon={<AccordionIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant={'h4'} sx={{ lineHeight: '32px' }}>
                We connect our customers with the best?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: '500px' }}>
            <AccordionSummary
              expandIcon={<AccordionIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant={'h4'} sx={{ lineHeight: '32px' }}>
                Android research & development rockstar?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </BasicLayout>
    </BasicLayout>
  );
};

export default FAQ;
