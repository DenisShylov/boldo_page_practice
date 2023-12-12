import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { OurBlogCard } from '../../Constants/OurBlogCard';
import { BasicLayout } from '../../Shared/BasicLayout';
import { Img } from '../../Shared/Img';
import { TitleSection } from '../../Shared/TitleSection';
// Props for TitleSection
const title = 'Our Blog';
const description = 'Value proposition accelerator product management venture';
const OurBlog = () => {
  return (
    <BasicLayout
      data-aos="fade-up"
      sx={{ flexDirection: 'column', alignItems: 'center' }}
    >
      <TitleSection title={title} description={description} />
      <BasicLayout>
        {OurBlogCard.map(({ mainImg, smImg, text, name }) => (
          <Card
            sx={{
              maxWidth: '300px',
            }}
          >
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
              <BasicLayout
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
              </BasicLayout>
              <Typography
                variant="h4"
                sx={{ lineHeight: '32px', width: '300px', height: '99px' }}
              >
                {text}
              </Typography>
              <BasicLayout sx={{ gap: '12px', alignItems: 'center' }}>
                <Img src={smImg} />
                <Typography variant="h5" sx={{}}>
                  {name}
                </Typography>
              </BasicLayout>
            </CardContent>
          </Card>
        ))}
      </BasicLayout>
      <Button
        sx={{
          border: '2px solid',
          borderRadius: '56px',
          color: 'text.blue.dark',
          mt: '84px',
        }}
      >
        Load more
      </Button>
    </BasicLayout>
  );
};

export default OurBlog;
