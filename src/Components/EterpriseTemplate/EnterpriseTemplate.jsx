import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Img } from '../Services/WomanCard.styles';
import { EnterpriseCard } from '../../Constants/EnterpriseCard';
import { BasicLayout } from '../../Shared/BasicLayout';
const EnterpriseTemplate = () => {
  return (
    <Box sx={{ mt: '220px', p: ' 96px 150px', bgcolor: 'text.blue.dark' }}>
      <BasicLayout
        sx={{
          alignItems: 'end',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'text.white',
            width: '716px',
            height: '139px',
            lineHeight: '72px',
          }}
        >
          An enterprise template to ramp up your company website
        </Typography>
        <BasicLayout sx={{ gap: '28px' }}>
          <IconButton sx={{ bgcolor: 'white' }}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: 'white' }}>
            <ArrowForwardOutlinedIcon />
          </IconButton>
        </BasicLayout>
      </BasicLayout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '22px',
          mt: '72px',
        }}
      >
        {EnterpriseCard.map(({ img, text, name, role }) => (
          <Card
            key={name}
            sx={{
              height: 'fit-content',
              maxWidth: '350px',
              borderRadius: '12px',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '40px',
                gap: '40px',
              }}
            >
              <Typography
                variant="h3"
                sx={{ lineHeight: '36px', width: '270px' }}
              >
                {text}
              </Typography>
              <CardMedia
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '300px',
                  height: '58px',
                }}
              >
                <Img src={img} />
                <BasicLayout
                  sx={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginLeft: '16px',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {name}
                  </Typography>
                  <Typography variant="h5">{role}</Typography>
                </BasicLayout>
              </CardMedia>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default EnterpriseTemplate;
