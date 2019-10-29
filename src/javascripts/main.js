import 'bootstrap';
import '../styles/main.scss';
import cows from './components/cowList/cowList';
import farmers from './components/farmerList/farmerList';

const init = () => {
  cows.buildCows();
  farmers.buildfarmers();
};

init();
