import axios from 'axios';

const getCowFarmers = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/cowFarmers.json').then((response) => {
    const doesCowFarmers = response.data.cowFarmers;
    const cowFarmerArr = [];
    Object.keys(doesCowFarmers).forEach((cfId) => {
      doesCowFarmers[cfId].id = cfId;
      cowFarmerArr.push(doesCowFarmers[cfId]);
    });
    resolve(cowFarmerArr);
  }).catch((error) => reject(error));
});

export default { getCowFarmers };
