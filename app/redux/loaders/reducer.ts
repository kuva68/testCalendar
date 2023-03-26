/* eslint-disable prettier/prettier */
import {Reducer} from 'redux';
import {appTypes} from '../app';
export interface LoadersState {
  calendar: boolean;
}

const INITIAL_STATE: LoadersState = {
  calendar: false,
};

export const loadersReducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.FIVE_DAY:
      return {...state, calendar: true};
    case appTypes.FIVE_DAY_FAILED:
    case appTypes.FIVE_DAY_SUCCESS:
      return {...state, calendar: false};

    default:
      return state;
  }
};
