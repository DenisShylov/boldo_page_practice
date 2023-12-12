import { Box } from '@mui/material';
import React from 'react';
import { Img } from '../../Shared/Img';
import man from '../../Assets/man.png';
import woman from '../../Assets/woman.png';
import man2 from '../../Assets/cardImg3.png';
import man3 from '../../Assets/ManTrash.png';
import manGroup from '../../Assets/mangroup.png';
import { ColumnBox } from '../../Shared/ColumnBox';

const AboutPhotoCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        position: 'absolute',
        width: '100%',
        top: '480px',
        justifyContent: 'center',
        zIndex: 11,
      }}
    >
      <ColumnBox sx={{ gap: '40px' }}>
        <Img src={man} sx={{ width: '300px', height: '285px' }} />
        <Img src={man3} sx={{ width: '300px', height: '303px' }} />
      </ColumnBox>
      <ColumnBox sx={{ mx: '50px' }}>
        <Img src={woman} sx={{ width: '400px', height: '632px' }} />
      </ColumnBox>
      <ColumnBox sx={{ gap: '40px' }}>
        <Img src={man2} sx={{ width: '302px', height: '305px' }} />
        <Img src={manGroup} sx={{ width: '302px', height: '287px' }} />
      </ColumnBox>
    </Box>
  );
};

export default AboutPhotoCards;
