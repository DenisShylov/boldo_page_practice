import { Typography } from '@mui/material';
import React from 'react';
// Locale Files

import { OurTeamItems } from '../../Constants/OurTeamItems';
import AboutTitleSection from '../../Shared/AboutTitleSection/AboutTitleSection';
import { ColumnBox } from '../../Shared/CustomBox';
import { Img } from '../../Shared/Img';
import { CardContainer } from './OurTeam.styles';

//Props for AboutTitleSection
const title = 'Our team';
const subtitle = 'The leadership team';
const description = `Conversion angel investor entrepreneur first mover advantage.Handshake infographic mass market crowdfunding iteration.
  Traction stock user experience deployment beta innovator incubator focus.`;

const OurTeam = () => {
  return (
    <ColumnBox data-aos="fade-up" sx={{ alignItems: 'center', mt: '96px' }}>
      <AboutTitleSection
        title={title}
        subtitle={subtitle}
        descr={description}
      />
      <CardContainer>
        {OurTeamItems.map(({ id, img, name, role }) => (
          <ColumnBox key={id} sx={{ gap: '24px' }}>
            <Img src={img} />
            <ColumnBox sx={{ gap: '12px' }}>
              <Typography
                variant="h2"
                sx={{ fontSize: '28px', lineHeight: '48px' }}
              >
                {name}
              </Typography>
              <Typography
                variant="h4"
                color="text.grey.lightest"
                sx={{ lineHeight: '32px' }}
              >
                {role}
              </Typography>
            </ColumnBox>
          </ColumnBox>
        ))}
      </CardContainer>
    </ColumnBox>
  );
};

export default OurTeam;
