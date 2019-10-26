import './cowList.scss';
import cows from '../../helpers/data/cows';

const buildCows = () => {
  cows.getCows()
    .then((response) => {
      console.log('it worked', response);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
