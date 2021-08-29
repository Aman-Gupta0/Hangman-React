import hangman0 from '../images/hangman0.png';
import hangman1 from '../images/hangman1.png';
import hangman2 from '../images/hangman2.png';
import hangman3 from '../images/hangman3.png';
import hangman4 from '../images/hangman4.png';
import hangman5 from '../images/hangman5.png';
import hangman6 from '../images/hangman6.png';

const Drawing = ({ livesLeft }) => {
  let path;
  switch (livesLeft) {
    case 0:
      path = hangman0;
      break;
    case 1:
      path = hangman1;
      break;
    case 2:
      path = hangman2;
      break;
    case 3:
      path = hangman3;
      break;
    case 4:
      path = hangman4;
      break;
    case 5:
      path = hangman5;
      break;
    default:
      path = hangman6;
      break;
  }
  return <img style={{ float: 'right' }} src={path} alt="HangMan Image" />;
};

export default Drawing;
