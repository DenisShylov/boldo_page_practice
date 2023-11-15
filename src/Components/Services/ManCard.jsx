import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import man from '../../Assets/man.png';
import { ReactComponent as Statistic } from '../../Assets/Group.svg';
import { Img } from './ManCard.styles';
import { ManCardItems } from '../../Constants/ManCardItems';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const ManCard = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '130px' }}>
      <Box sx={{ position: 'relative' }}>
        <Img src={man} />
        <Card
          sx={{
            maxWidth: 251,
            bgcolor: 'white',
            position: 'absolute',
            top: '230px',
            right: '57px',
            borderRadius: '24px',
            boxShadow: ' 0px 4px 32px 0px rgba(0, 0, 0, 0.12)',
            gap: '20px',
            display: 'flex',
            flexDirection: 'column',
            p: '40px',
            pb: 0,
          }}
        >
          <Statistic sx={{ borderRadius: '24px' }} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              sx={{ fontFamily: 'Manrope', fontWeight: 700 }}
            >
              30%
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: 'Manrope' }}
              color="text.secondary"
            >
              More income in June
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <Box sx={{ width: '493px' }}>
            <Typography variant="h2" sx={{ lineHeight: '56px' }}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {ManCardItems.map(({ id, text }) => (
              <Box key={{ id }} sx={{ display: 'flex' }}>
                <CheckCircleIcon
                  sx={{ width: '36px', height: '36px', mr: '27px' }}
                />
                <Typography variant="h4">{text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{ color: 'text.white', bgcolor: 'text.blue.dark', mt: '56px' }}
        >
          Start Now
        </Button>
      </Box>
    </Box>
  );
};

export default ManCard;
