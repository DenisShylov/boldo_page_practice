import { Box, Typography } from '@mui/material';

export const TitleSection = ({ title, description }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: {
        xs: '300px',
        sm: '300px',
        md: '300px',
        lg: '842px',
        xl: '842px',
      },
      textAlign: 'center',
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontSize: {
          xs: '16px',
          sm: '16px',
          md: '20px',
          lg: '20px',
          xl: '20px',
        },
        color: 'text.grey.lightest',
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="h1"
      sx={{
        fontSize: {
          xs: '24px',
          sm: '24px',
          md: '24px',
          lg: '48px',
          xl: '48px',
        },
      }}
    >
      {description}
    </Typography>
  </Box>
);
