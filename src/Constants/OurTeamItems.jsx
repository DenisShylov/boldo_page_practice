import { v4 as uuid } from 'uuid';
import card1 from '../Assets/AboutImages/Image1.png';
import card2 from '../Assets/AboutImages/Image2.png';
import card3 from '../Assets/AboutImages/Image3.png';

export const OurTeamItems = [
  {
    id: uuid(),
    img: card1,
    name: 'Michael Scott',
    role: 'General Manager',
  },
  { id: uuid(), img: card2, name: 'Dwight Schrute', role: 'General Manager' },
  { id: uuid(), img: card3, name: 'Pam Beetsley', role: 'General Manager' },
];
