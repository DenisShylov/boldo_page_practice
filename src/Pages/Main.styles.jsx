import { Container, styled } from '@mui/material';
import Ellipse from '../Assets/Ellipse 9.png';

export const HeroWrapper = styled(Container)(({ theme }) => ({
  backgroundColor: '#0A2640 ',
  backgroundImage: `url(${Ellipse})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '100% 0',
}));
