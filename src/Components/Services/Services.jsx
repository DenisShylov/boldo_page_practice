import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import React from 'react';
import { CardContentItems } from '../../Constants/CardContentItems';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ManCard from './ManCard';
import WomanCard from './WomanCard';
import { TitleSection } from '../../Shared/TitleSection';
// Props for TitleSection
const text = 'Our Services';
const description = 'Handshake infographic mass market crowdfunding iteration.';
const Services = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <TitleSection title={text} description={description} />
      <Box sx={{ display: 'flex', padding: '80px 150px', gap: '100px' }}>
        {CardContentItems.map(({ id, img, title, text }) => {
          return (
            <Card key={id}>
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
            </Card>
          );
        })}
      </Box>
      <ManCard />

      <WomanCard />
    </Box>
  );
};

export default Services;
