import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
// Locale Files
import { Swiper, SwiperSlide } from 'swiper/react';
import { EnterpriseCard } from '../../Constants/EnterpriseCard';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';
import {
  ArrowIcon,
  CustomCard,
  CustomCardContent,
  CustomCardMedia,
  EnterpriseTemplateContainer,
  Img,
  TitleContainer,
  TitleText,
} from './Enterprise.styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const EnterpriseTemplate = () => {
  const [swiperInstance, setSwiperInstance] = useState('');

  return (
    <EnterpriseTemplateContainer data-aos="fade-up">
      <TitleContainer>
        <TitleText variant="h1">
          An enterprise template to ramp up your company website
        </TitleText>
        <RowBox sx={{ gap: '28px' }}>
          <ArrowIcon onClick={() => swiperInstance.slidePrev()}>
            <ArrowBackOutlinedIcon />
          </ArrowIcon>
          <ArrowIcon onClick={() => swiperInstance.slideNext()}>
            <ArrowForwardOutlinedIcon />
          </ArrowIcon>
        </RowBox>
      </TitleContainer>
      <RowBox
        sx={{
          justifyContent: 'center',
          gap: '22px',
          mt: '72px',
        }}
      >
        <Swiper
          style={{ minWidth: '325px' }}
          spaceBetween={40}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {EnterpriseCard.map(({ id, img, text, name, role }) => {
            return (
              <SwiperSlide style={{ flexShrink: 0 }} key={id}>
                <CustomCard>
                  <CustomCardContent>
                    <Typography
                      variant="h3"
                      sx={{ lineHeight: '36px', width: '270px' }}
                    >
                      {text}
                    </Typography>
                    <CustomCardMedia>
                      <Img src={img} />
                      <ColumnBox
                        sx={{
                          alignItems: 'flex-start',
                          marginLeft: '16px',
                        }}
                      >
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          {name}
                        </Typography>
                        <Typography variant="h5">{role}</Typography>
                      </ColumnBox>
                    </CustomCardMedia>
                  </CustomCardContent>
                </CustomCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </RowBox>
    </EnterpriseTemplateContainer>
  );
};

export default EnterpriseTemplate;
