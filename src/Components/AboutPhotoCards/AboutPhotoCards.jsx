import React from 'react';
// Locale Files
import man3 from '../../Assets/ManTrash.png';
import man2 from '../../Assets/cardImg3.png';
import man from '../../Assets/man.png';
import manGroup from '../../Assets/mangroup.png';
import woman from '../../Assets/woman.png';
import { ColumnBox } from '../../Shared/CustomBox';
import { Img } from '../../Shared/Img';
import { PhotoCardsBox } from './AboutPhotoCards.styles';

const AboutPhotoCards = () => {
  return (
    <PhotoCardsBox>
      <ColumnBox sx={{ gap: '40px' }}>
        <Img src={man} width={300} height={285} />
        <Img src={man3} width={300} height={303} />
      </ColumnBox>
      <ColumnBox sx={{ mx: '50px' }}>
        <Img src={woman} width={400} height={632} />
      </ColumnBox>
      <ColumnBox sx={{ gap: '40px' }}>
        <Img src={man2} width={302} height={305} />
        <Img src={manGroup} width={302} height={287} />
      </ColumnBox>
    </PhotoCardsBox>
  );
};

export default AboutPhotoCards;
