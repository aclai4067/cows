import 'bootstrap';
import '../styles/main.scss';
import cows from './components/cowList/cowList';
import farmers from './components/farmerList/farmerList';
import cowFarmerData from './helpers/data/cowFarmerData';

const init = () => {
  cows.buildCows();
  farmers.buildfarmers();
  cowFarmerData.getCowFarmers()
    .then((cowFarmers) => {
      console.log('from main js', cowFarmers);
    })
    .catch((error) => console.error('cowFarmers broke', error));
};

init();
