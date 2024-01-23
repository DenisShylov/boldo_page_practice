import { Box, CardContent } from '@mui/material';
import React from 'react';
// Locale Files
import { ReactComponent as Statistic } from '../../Assets/Group.svg';
import man from '../../Assets/man.png';
import { CardItems } from '../../Constants/CardItems';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';
import {
  CheckIcon,
  CustomCard,
  DescrText,
  Img,
  ListContainer,
  ListText,
  ManCardContainer,
  NumberText,
  StartNowBtn,
  Text,
  WrapperText,
} from './ManCard.styles';

const ManCard = () => {
  return (
    <ManCardContainer>
      <Box sx={{ position: 'relative' }}>
        <Img src={man} />
        <CustomCard>
          <Statistic />
          <CardContent>
            <NumberText gutterBottom variant="h3">
              30%
            </NumberText>
            <DescrText variant="h6">More income in June</DescrText>
          </CardContent>
        </CustomCard>
      </Box>
      <ListContainer>
        <ColumnBox sx={{ gap: '40px' }}>
          <WrapperText>
            <Text variant="h2">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Text>
          </WrapperText>
          <ColumnBox sx={{ gap: '24px' }}>
            {CardItems.map(({ id, text }) => (
              <RowBox key={id} sx={{ alignItems: 'center' }}>
                <CheckIcon />
                <ListText variant="h4">{text}</ListText>
              </RowBox>
            ))}
          </ColumnBox>
        </ColumnBox>
        <StartNowBtn variant="contained">Start Now</StartNowBtn>
      </ListContainer>
    </ManCardContainer>
  );
};

export default ManCard;
