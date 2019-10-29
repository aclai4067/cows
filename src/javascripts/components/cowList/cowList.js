import './cowList.scss';
import cowdata from '../../helpers/data/cows';

const buildCows = () => {
  cowdata.getCows()
    .then((response) => {
      const demCows = response.data.cows;
      const cows = [];
      Object.keys(demCows).forEach((cowId) => {
        demCows[cowId].id = cowId;
        cows.push(demCows[cowId]);
      });
      console.log('it worked', cows);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
