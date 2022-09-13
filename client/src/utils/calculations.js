import { useMutation } from '@apollo/client';
import { ADD_TRAVEL, ADD_HOME } from './mutations';

const [addTravel] = useMutation(ADD_TRAVEL, {
    update(cache) {
       try {
          // update me array's cache
          const { me } = cache.readQuery({ query: QUERY_ME });
          cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, travelData: [...me.travelData] } },
       });
      } catch (e) {
          console.warn(e);
      }
  }
});

export const calculateTravel = (
  carType,
  carMiles,
  trainMiles,
  busMiles,
  planeMiles
) => {
  let carEmissions; 
  switch (carType) {
    case 'small':
      carEmissions = Math.round(4.2887(carMiles));
      break;
    case 'average':
      carEmissions = Math.round(5.32155(carMiles));
      break;
    case 'hybrid':
      carEmissions = Math.round(2.9597(carMiles));
      break;
    default:
      carEmissions = Math.round(7.40532(carMiles));
      break;
  }

  const publicTravelEmissions = Math.round(
    1.832934(trainMiles) + 3.952283(busMiles)
  );

  const planeEmissions = Math.round(4.678333(planeMiles));

  return { carEmissions, publicTravelEmissions, planeEmissions };
};

export const calculateHome = (
  showerNumber,
  minutes,
  laundry,
  flushes,
  bottles,
  fridge,
  TV,
  laptop,
  desktop,
  monitor,
  size,
  climate,
  acDays,
  gasDays,
  oilDays
) => {
  const showerEmissions = 78(showerNumber)(minutes);
  const laundryEmissions = 170(laundry);
  const flushesEmissions = 582.4(flushes);
  const bottlesEmissions = 161.98(bottles);
  const waterEmissions = Math.round(
    showerEmissions + laundryEmissions + flushesEmissions + bottlesEmissions
  );

let fridgeEmissions;
  if (!fridge) {
    fridgeEmissions = 0;
  } else {
    fridgeEmissions = 495;
  }

  const TVEmissions = 14.8272(TV);
  const desktopEmissions = 29.01095(desktop);
  const laptopEmissions = 7.73625(laptop);
  const monitorEmissions = 4.512814(monitor);

let ACEmissions, gasEmissions, oilEmissions;
  switch (climate) {
    case 'cold':
      ACEmissions = 2637.648(size)(acDays);
      gasEmissions = (0.07644(size) / 365)(gasDays);
      oilEmissions = (32.68055(size) / 365)(oilDays);
      break;
    case 'cool':
      ACEmissions = 5275.296(size)(acDays);
      gasEmissions = (0.0637(size) / 365)(gasDays);
      oilEmissions = (26.68412(size) / 365)(oilDays);
      break;
    case 'moderate':
      ACEmissions = 10550.6(size)(acDays);
      gasEmissions = (0.05733(size) / 365)(gasDays);
      oilEmissions = (20.68769(size) / 365)(oilDays);
      break;
    case 'warm':
      ACEmissions = 13188.25(size)(acDays);
      gasEmissions = (0.05096(size) / 365)(gasDays);
      oilEmissions = (13.9919(size) / 365)(oilDays);
      break;
    default:
      ACEmissions = 15825.9(size)(acDays);
      gasEmissions = (0.0446(size) / 365)(gasDays);
      oilEmissions = (8.09518(size) / 365)(oilDays);
      break;
  }

  const electricityEmissions = Math.round(
    fridgeEmissions +
    TVEmissions +
    desktopEmissions +
    laptopEmissions +
    monitorEmissions +
    ACEmissions
  );

  const heatEmissions = Math.round(gasEmissions + oilEmissions);
  return { waterEmissions, electricityEmissions, heatEmissions };
};
