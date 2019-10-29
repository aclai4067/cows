import cowData from './cows';
import farmerData from './farmerData';
import cowFarmerData from './cowFarmerData';

const getCompleteCows = () => new Promise((resolve, reject) => {
  cowData.getCows()
    .then((cows) => {
      farmerData.getFarmers().then((farmers) => {
        cowFarmerData.getCowFarmers().then((cowFarmers) => {
          const finalCows = [];
          cows.forEach((cow) => {
            const newCow = { ...cow };
            const cowFarmerRecord = cowFarmers.find((c) => c.cowId === cow.id);
            const owner = farmers.find((f) => f.id === cowFarmerRecord.farmerId);
            newCow.owner = owner;
            finalCows.push(newCow);
          });
          resolve(finalCows);
        });
      });
    })
    .catch((error) => reject(error));
});

export default { getCompleteCows };
