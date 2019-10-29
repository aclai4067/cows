import './farmerList.scss';
import farmerData from '../../helpers/data/farmerData';

const buildfarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      console.log('farmerArr from farmerlist', farmers);
    })
    .catch((error) => console.error('farmers broke', error));
};

export default { buildfarmers };
