import { Box } from '@mui/material';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Ellipse from './Assets/Ellipse 9.png';

function App() {
  return (
    <Box
      sx={{
        background: '#0A2640 ',
        backgroundImage: `url(${Ellipse})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 0',
      }}
    >
      <Header />
      <Hero />
    </Box>
  );
}

export default App;
