import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Img } from './WomanCard.styles';
import woman from '../../Assets/woman.png';
import { ReactComponent as PieImg } from '../../Assets/Pie Graph.svg';
import { ReactComponent as Ellipse } from '../../Assets/Ellipse.svg';
import { CardItems } from '../../Constants/CardItems';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
const WomanCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '1200px',
        alignItems: 'center',
        mt: '200px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <Box sx={{ width: '493px' }}>
          <Typography variant="h2" sx={{ lineHeight: '56px' }}>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {CardItems.map(({ id, text }, index) => {
            if (index === 0) {
              return (
                <Box
                  key={{ id }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'text.blue.dark',
                    color: 'text.white',
                    padding: '16px 50px',
                    borderRadius: '4px',
                    boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <HistoryEduIcon
                    sx={{ width: '36px', height: '36px', mr: '27px' }}
                  />
                  <Typography variant="h4">{text}</Typography>
                </Box>
              );
            } else if (index === 1) {
              return (
                <Box
                  key={{ id }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px 50px',
                    borderRadius: '4px',
                    boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <RemoveRedEyeOutlinedIcon
                    sx={{ width: '36px', height: '36px', mr: '27px' }}
                  />
                  <Typography variant="h4">{text}</Typography>
                </Box>
              );
            } else {
              return (
                <Box
                  key={{ id }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px 50px',
                    borderRadius: '4px',
                    boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <WbSunnyOutlinedIcon
                    sx={{ width: '36px', height: '36px', mr: '27px' }}
                  />
                  <Typography variant="h4">{text}</Typography>
                </Box>
              );
            }
          })}
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Img src={woman} />

        <Card
          sx={{
            maxWidth: 291,
            bgcolor: 'white',
            position: 'absolute',
            bottom: '-150px',
            left: '57px',
            borderRadius: '24px',
            boxShadow: ' 0px 4px 32px 0px rgba(0, 0, 0, 0.12)',
            gap: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: '24px',
            pb: 0,
            height: '388px',
            width: '291px',
          }}
        >
          <PieImg
            style={{
              width: '173px',
              height: '173px',
            }}
          />
          <CardContent
            sx={{ gap: '12px', display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{ display: 'flex', alignItems: ' center', gap: '7.5px' }}>
              <Ellipse style={{ color: '#0DBBFC' }} />
              <Typography
                variant="h6"
                component={'span'}
                sx={{ fontFamily: 'Manrope' }}
                color="text.secondary"
              >
                35% - Agile Development
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: ' center', gap: '7.5px' }}>
              <Ellipse style={{ color: '#69E6A6' }} />

              <Typography
                variant="h6"
                component={'span'}
                sx={{ fontFamily: 'Manrope' }}
                color="text.secondary"
              >
                30% - Investor bandwidth
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: ' center', gap: '7.5px' }}>
              <Ellipse style={{ color: '#C4C4C4' }} />
              <Typography
                variant="h6"
                component={'span'}
                sx={{ fontFamily: 'Manrope' }}
                color="text.secondary"
              >
                35% - A/B testing
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default WomanCard;
