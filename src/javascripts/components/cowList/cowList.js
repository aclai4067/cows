import './cowList.scss';
import smash from '../../helpers/data/smash';
// import utilities from '../../helpers/utilities';

const buildCows = () => {
  smash.getCompleteCows()
    .then((response) => {
      console.log('cow array from cowlist', response);
      // let cowString = '';
      // for (let i = 0; i < response.length; i += 1) {
      //   cowString += `
      //    <li>${response[i].name}</li>
      //   `;
      // }
      // utilities.printToDom('pasture', cowString);
    })
    .catch((error) => {
      console.error('cows broke', error);
    });
};

export default { buildCows };
