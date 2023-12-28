import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Box, CardContent, Typography } from '@mui/material';
import React from 'react';
// Locale Files
import { ReactComponent as Ellipse } from '../../Assets/Ellipse.svg';
import { ReactComponent as PieImg } from '../../Assets/Pie Graph.svg';
import woman from '../../Assets/woman.png';
import { CardItems } from '../../Constants/CardItems';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';
import {
  CustomCard,
  Img,
  ItemText,
  ItemWrapper,
  ListText,
  ListWrapper,
  WomanCardContainer,
} from './WomanCard.styles';

const WomanCard = () => {
  return (
    <WomanCardContainer>
      <ListWrapper>
        <Box sx={{ width: '493px' }}>
          <ListText variant="h2">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </ListText>
        </Box>
        <ColumnBox sx={{ gap: '24px' }}>
          {CardItems.map(({ id, text }, index) => {
            if (index === 0) {
              return (
                <ItemWrapper key={id}>
                  <HistoryEduIcon
                    sx={{ width: '36px', height: '36px', mr: '27px' }}
                  />
                  <ItemText variant="h4">{text}</ItemText>
                </ItemWrapper>
              );
            } else if (index === 1) {
              return (
                <ItemWrapper
                  key={id}
                  sx={{
                    bgcolor: 'text.white',
                    color: '#000',
                  }}
                >
                  <RemoveRedEyeOutlinedIcon
                    sx={{ width: '36px', height: '36px', mr: '27px' }}
                  />
                  <ItemText variant="h4">{text}</ItemText>
                </ItemWrapper>
              );
            } else {
              return (
                <ItemWrapper
                  key={id}
                  sx={{
                    bgcolor: 'text.white',
                    color: '#000',
                  }}
                >
                  <WbSunnyOutlinedIcon
                    sx={{ width: '36px', height: '36px', mr: '27px' }}
                  />
                  <ItemText variant="h4">{text}</ItemText>
                </ItemWrapper>
              );
            }
          })}
        </ColumnBox>
      </ListWrapper>
      <Box sx={{ position: 'relative' }}>
        <Img src={woman} />

        <CustomCard>
          <PieImg
            style={{
              width: '173px',
              height: '173px',
            }}
          />
          <CardContent
            sx={{ gap: '12px', display: 'flex', flexDirection: 'column' }}
          >
            <RowBox sx={{ alignItems: ' center', gap: '7.5px' }}>
              <Ellipse style={{ color: '#0DBBFC' }} />
              <Typography
                variant="h6"
                component={'span'}
                sx={{ fontFamily: 'Manrope' }}
                color="text.secondary"
              >
                35% - Agile Development
              </Typography>
            </RowBox>
            <RowBox sx={{ alignItems: ' center', gap: '7.5px' }}>
              <Ellipse style={{ color: '#69E6A6' }} />

              <Typography
                variant="h6"
                component={'span'}
                sx={{ fontFamily: 'Manrope' }}
                color="text.secondary"
              >
                30% - Investor bandwidth
              </Typography>
            </RowBox>
            <RowBox sx={{ alignItems: ' center', gap: '7.5px' }}>
              <Ellipse style={{ color: '#C4C4C4' }} />
              <Typography
                variant="h6"
                component={'span'}
                sx={{ fontFamily: 'Manrope' }}
                color="text.secondary"
              >
                35% - A/B testing
              </Typography>
            </RowBox>
          </CardContent>
        </CustomCard>
      </Box>
    </WomanCardContainer>
  );
};

export default WomanCard;
