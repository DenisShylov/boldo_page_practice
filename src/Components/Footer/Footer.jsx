import React, { useState } from 'react';
import { BasicLayout } from '../../Shared/BasicLayout';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Ellipse from '../../Assets/Ellipse_small.png';
import { LogoBoldo, LogoText } from '../../Shared/Img';
import { footerTableItems } from '../../Constants/Constants';
import { CustomInputBase } from './Footer.styles';
const Footer = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <BasicLayout
        data-aos="fade-up"
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          p: '93px',
          gap: '84px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'text.blue.dark',
            backgroundImage: `url(${Ellipse})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '100% 0',
            height: '391px',
            borderRadius: '12px',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              color: 'text.white',
              lineHeight: '72px',
              width: '716px',
              height: '139px',
            }}
          >
            An enterprise template to ramp up your company website
          </Typography>

          <Box sx={{ display: 'flex', gap: '24px', mt: '50px' }}>
            <CustomInputBase
              placeholder="Your email address"
              value={inputValue}
              onChange={({ target: { value } }) => setInputValue(value)}
            />
            <Button
              sx={{
                bgcolor: 'success.main',
                color: 'text.blue.dark',
                borderRadius: '56px',
                '&:hover': {
                  bgcolor: '#86c7a6',
                },
              }}
            >
              Start Now
            </Button>
          </Box>
        </Box>
      </BasicLayout>
      <Box sx={{ display: 'flex', p: '0 93px 93px' }}>
        <Box sx={{ mr: '180px' }}>
          <BasicLayout sx={{ alignItems: 'center', gap: '11px' }}>
            <LogoBoldo sx={{ color: 'text.blue.dark' }} />
            <LogoText sx={{ color: 'text.blue.dark' }}>Boldo</LogoText>
          </BasicLayout>
          <Box sx={{}}>
            <Typography
              variant="h5"
              sx={{ width: '300px', height: '84px', mt: '40px' }}
              color="text.grey.lightest"
            >
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </Typography>
            <Typography
              variant="h5"
              color="text.grey.lightest"
              sx={{ mt: '64px' }}
            >
              All rights reserved.
            </Typography>
          </Box>
        </Box>
        <TableContainer component={Paper} sx={{ width: '642px', boxShadow: 0 }}>
          <Table sx={{ position: 'relative' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    border: 0,
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                  }}
                  align="right"
                >
                  Landings
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    border: 0,
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                  }}
                  align="right"
                >
                  Company
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    border: 0,
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                  }}
                  align="right"
                >
                  Resources
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {footerTableItems.map(({ id, item1, item2, item3 }) => (
                <TableRow key={id} sx={{ border: 0 }}>
                  <TableCell
                    sx={{
                      border: 0,
                      width: '150px',
                      fontFamily: 'Open Sans',
                      fontSize: '20px',
                    }}
                    align="right"
                  >
                    {item1}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: 0,
                      width: '150px',
                      fontFamily: 'Open Sans',
                      fontSize: '20px',
                    }}
                    align="right"
                  >
                    {item2}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: 0,
                      width: '150px',
                      fontFamily: 'Open Sans',
                      fontSize: '20px',
                    }}
                    align="right"
                  >
                    {item3}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <Button
              sx={{
                position: 'absolute',
                bottom: '33%',
                left: '49%',
                bgcolor: 'success.main',
                color: 'text.blue.dark',
                borderRadius: '120px',
                padding: '1px 14px',
                fontSize: '13px',
              }}
            >
              Hiring!
            </Button>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Footer;
