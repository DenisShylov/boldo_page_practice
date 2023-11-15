import { Box, Container, Typography } from '@mui/material';
import React from 'react';
//Local files
import group from '../../Assets/Group 263.png';
import groupColumn from '../../Assets/Group 208.png';
import pieGraph from '../../Assets/Pie Graph.png';
import { Card, CardImg } from './StatisticCards.styles';
import { itemCard } from '../../Constants/PercentItemCard';

const StatisticCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '494px',
      }}
    >
      <Card sx={{ mb: '25px' }}>
        <CardImg
          src={group}
          width={47}
          height={9}
          sx={{ ml: '14.3px', mt: '14.3px' }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '19px',
            mt: '35px',
          }}
        >
          {itemCard.map(({ id, width, percent, color }) => {
            return (
              <Box
                key={id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14.3px',
                  ml: '29px',
                }}
              >
                <Box
                  component={'span'}
                  sx={{
                    width: '54px',
                    height: ' 11.777px',
                    borderRadius: ' 14.132px',
                    background: '#95ABBC',
                  }}
                ></Box>
                <Box
                  component={'span'}
                  sx={{
                    width,
                    height: ' 11.777px',
                    borderRadius: '14.132px',
                    bgcolor: color,
                  }}
                ></Box>
                <Typography variant={'subtitle1'}>{percent}</Typography>
              </Box>
            );
          })}
        </Box>
      </Card>

      <Card
        sx={{
          width: '192px',
          height: '165px',
          mr: '40px',
        }}
      >
        <CardImg
          src={group}
          width={47}
          height={9}
          sx={{ ml: '14.3px', mt: '14.3px' }}
        />
        <Container>
          <CardImg src={groupColumn} />
        </Container>
      </Card>

      <Card sx={{ width: '262px', height: '165px' }}>
        <CardImg
          src={group}
          width={47}
          height={9}
          sx={{ ml: '14.3px', mt: '14.3px' }}
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            mt: '25px',
          }}
        >
          <CardImg src={pieGraph} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Box
              sx={{
                width: '72px',
                height: '8px',
                bgcolor: '#95ABBC',
                borderRadius: '14.132px',
              }}
            ></Box>
            <Box
              sx={{
                width: '68px',
                height: '8px',
                bgcolor: '#95ABBC',
                borderRadius: '14.132px',
              }}
            ></Box>
            <Box
              sx={{
                width: '76px',
                height: '8px',
                bgcolor: '#95ABBC',
                borderRadius: '14.132px',
              }}
            ></Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default StatisticCards;
