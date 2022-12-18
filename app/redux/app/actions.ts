import {ICityResponse, IFiveDayResponse} from '../../services/api/apiTypes';
import {ILocation} from '../../utils/types';
import {appTypes} from './types';

export const appActionCreators = {
  city: (city: ILocation) => ({type: appTypes.CITY, payload: city}),
  citySuccess: (city: ICityResponse) => ({
    type: appTypes.CITY_SUCCESS,
    payload: city,
  }),
  cityFailure: () => ({type: appTypes.CITY_FAILURE}),
  fiveDay: (location: ILocation) => ({
    type: appTypes.FIVE_DAY,
    payload: location,
  }),
  fiveDayFailure: () => ({type: appTypes.FIVE_DAY_FAILED}),
  fiveDaySuccess: (fiveDay: IFiveDayResponse) => ({
    type: appTypes.FIVE_DAY_SUCCESS,
    payload: fiveDay,
  }),
  setCurrentDay: (currentDay: string) => ({
    type: appTypes.SET_CURRENT_DAY,
    payload: currentDay,
  }),
};
