import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import React from 'react';
import { CardContentItems } from '../../Constants/CardContentItems';
import { ColumnBox } from '../../Shared/CustomBox';
import { TitleSection } from '../../Shared/TitleSection';
import ManCard from './ManCard';
import { CardContainer, CustomCard } from './Services.styles';
import WomanCard from './WomanCard';
// Props for TitleSection
const text = 'Our Services';
const description = 'Handshake infographic mass market crowdfunding iteration.';

const Services = () => {
  return (
    <ColumnBox
      data-aos="fade-up"
      id="Services"
      sx={{
        alignItems: 'center',
        width: '100%',
      }}
    >
      <TitleSection title={text} description={description} />
      <CardContainer>
        {CardContentItems.map(({ id, img, title, text }) => {
          return (
            <CustomCard key={id}>
              <CardMedia image={img} title={title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ p: 0 }}>
                  Explore page <ArrowForwardIcon />
                </Button>
              </CardActions>
              <Divider />
            </CustomCard>
          );
        })}
      </CardContainer>
      <ManCard />

      <WomanCard />
    </ColumnBox>
  );
};

export default Services;
