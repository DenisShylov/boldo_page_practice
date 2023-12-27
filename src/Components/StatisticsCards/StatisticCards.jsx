import { Container, Typography } from '@mui/material';
import React from 'react';
//Local files
import groupColumn from '../../Assets/Group 208.png';
import group from '../../Assets/Group 263.png';
import pieGraph from '../../Assets/Pie Graph.png';
import { itemCard } from '../../Constants/PercentItemCard';
import { ColumnBox } from '../../Shared/CustomBox';
import {
  Card1,
  Card2,
  Card3,
  CardImg,
  CardLineBig,
  CardLineSmall,
  CardLineWrapper,
  Line,
  LineContainer,
  StatisticCardsContainer,
} from './StatisticCards.styles';

const StatisticCards = () => {
  return (
    <StatisticCardsContainer>
      <Card1>
        <CardImg
          src={group}
          width={47}
          height={9}
          sx={{ ml: '14.3px', mt: '14.3px' }}
        />
        <ColumnBox
          sx={{
            gap: '19px',
            mt: '35px',
          }}
        >
          {itemCard.map(({ id, width, percent, color }) => {
            return (
              <CardLineWrapper key={id}>
                <CardLineSmall component={'span'}></CardLineSmall>
                <CardLineBig
                  component={'span'}
                  sx={{
                    width,
                    bgcolor: color,
                  }}
                ></CardLineBig>
                <Typography variant={'subtitle1'}>{percent}</Typography>
              </CardLineWrapper>
            );
          })}
        </ColumnBox>
      </Card1>

      <Card2>
        <CardImg
          src={group}
          width={47}
          height={9}
          sx={{ ml: '14.3px', mt: '14.3px' }}
        />
        <Container sx={{ textAlign: 'center' }}>
          <CardImg src={groupColumn} />
        </Container>
      </Card2>

      <Card3>
        <CardImg
          src={group}
          width={47}
          height={9}
          sx={{ ml: '14.3px', mt: '14.3px' }}
        />

        <LineContainer>
          <CardImg src={pieGraph} />
          <ColumnBox sx={{ gap: '14px' }}>
            <Line
              sx={{
                width: '72px',
              }}
            />
            <Line />
            <Line
              sx={{
                width: '76px',
              }}
            />
          </ColumnBox>
        </LineContainer>
      </Card3>
    </StatisticCardsContainer>
  );
};

export default StatisticCards;
