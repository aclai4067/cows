import 'bootstrap';
import '../styles/main.scss';
import cows from './components/cowList/cowList';

const init = () => {
  cows.buildCows();
};

init();
