import { v4 as uuid } from 'uuid';
import firstImg from '../Assets/cardImg3.png';
import secondImg from '../Assets/woman.webp';
import thirdImg from '../Assets/ManTrash.png';
import firstSmallImg from '../Assets/smallImgCard.png';
import secondSmallImg from '../Assets/smallImgCard2.png';
import thirdSmallImg from '../Assets/smallimgCard3.png';

export const OurBlogCard = [
  {
    id: uuid(),
    mainImg: firstImg,
    smImg: firstSmallImg,
    name: 'Chandler Bing',
    text: 'Pitch termsheet backing validation focus release.',
  },
  {
    id: uuid(),
    mainImg: secondImg,
    smImg: secondSmallImg,
    name: 'Rachel Green',
    text: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
  },
  {
    id: uuid(),
    mainImg: thirdImg,
    smImg: thirdSmallImg,
    name: 'Monica Geller',
    text: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
  },
];
