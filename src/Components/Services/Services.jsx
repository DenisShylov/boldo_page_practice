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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '842px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: 'text.grey.lightest' }}>
          Our Services
        </Typography>
        <Typography variant="h1">
          Handshake infographic mass market crowdfunding iteration.
        </Typography>
      </Box>
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
                <Button size="small">
                  Explore page <ArrowForwardIcon />
                </Button>
              </CardActions>
              <Divider />
            </Card>
          );
        })}
      </Box>
      <ManCard />
    </Box>
  );
};

export default Services;
