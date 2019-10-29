import './cowList.scss';
import cowdata from '../../helpers/data/cows';

const buildCows = () => {
  cowdata.getCows()
    .then((response) => {
      console.log('cow array from cowlist', response);
      let cowString = '';
      for (let i = 0; i < response.length; i += 1) {
        cowString += `
         <li>${response[i].name}</li>
        `;
      }
      console.log(cowString);
    })
    .catch((error) => {
      console.error('it broke', error);
    });
};

export default { buildCows };
