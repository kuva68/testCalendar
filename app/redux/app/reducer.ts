import {Reducer} from 'redux';
import {ICityResponse, IFiveDayResponse} from '../../services/api/apiTypes';

import {appTypes} from './types';

export interface IAppState {
  city: ICityResponse | null;
  fiveDay: IFiveDayResponse | null;
  currentDay: string;
}

const INITIAL_STATE: IAppState = {
  city: null,
  fiveDay: null,
  currentDay: '',
};

export const appReducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.FIVE_DAY_SUCCESS:
      return {
        ...state,
        fiveDay: action.payload,
      };
    case appTypes.SET_CURRENT_DAY:
      return {
        ...state,
        currentDay: action.payload,
      };
    default:
      return state;
  }
};
