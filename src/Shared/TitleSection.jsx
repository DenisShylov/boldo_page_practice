import { Box, Typography } from '@mui/material';

export const TitleSection = ({ title, description }) => (
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
      {title}
    </Typography>
    <Typography variant="h1">{description}</Typography>
  </Box>
);
