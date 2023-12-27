import { CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
// Locale Files
import { OurBlogCard } from '../../Constants/OurBlogCard';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';
import { Img } from '../../Shared/Img';
import { TitleSection } from '../../Shared/TitleSection';
import { CardContainer, LoadMoreBtn, Wrapper } from './OurBlog.styles';

// Props for TitleSection
const title = 'Our Blog';
const description = 'Value proposition accelerator product management venture';

const OurBlog = () => {
  return (
    <ColumnBox data-aos="fade-up" sx={{ alignItems: 'center' }}>
      <TitleSection title={title} description={description} />
      <Wrapper>
        {OurBlogCard.map(({ id, mainImg, smImg, text, name }) => (
          <CardContainer key={id}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
              }}
            >
              <CardMedia
                sx={{
                  display: 'flex',
                  m: 'auto',
                  height: '209px',
                }}
              >
                <Img src={mainImg} sx={{ width: '100%', height: '209px' }} />
              </CardMedia>
              <RowBox
                sx={{
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: 'text.blue.dark', fontWeight: 700 }}
                >
                  Category
                </Typography>
                <Typography variant="h5" sx={{ lineHeight: '28px' }}>
                  November 22, 2021
                </Typography>
              </RowBox>
              <Typography
                variant="h4"
                sx={{ lineHeight: '32px', width: '300px', height: '99px' }}
              >
                {text}
              </Typography>
              <RowBox sx={{ gap: '12px', alignItems: 'center' }}>
                <Img src={smImg} />
                <Typography variant="h5">{name}</Typography>
              </RowBox>
            </CardContent>
          </CardContainer>
        ))}
      </Wrapper>
      <LoadMoreBtn>Load more</LoadMoreBtn>
    </ColumnBox>
  );
};

export default OurBlog;
