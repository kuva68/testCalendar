import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../index';
import {AppDispatch} from '../index';
import {appTypes} from './types';

// Selector hooks
export const useFiveDay = () =>
  useSelector((state: RootState) => state.app.fiveDay);
export const useCity = () => useSelector((state: RootState) => state.app.city);
export const useCurrentDay = () =>
  useSelector((state: RootState) => state.app.currentDay);
// Callback hooks

export const useGetCity = (dispatch: AppDispatch) =>
  useCallback(
    () =>
      dispatch({
        type: appTypes.CITY,
        payload: {lat: 48.62389, lon: 22.295},
      }),
    [dispatch],
  );
export const useGetFiveDay = (dispatch: AppDispatch) =>
  useCallback(
    () =>
      dispatch({
        type: appTypes.FIVE_DAY,
        payload: {lat: 48.62389, lon: 22.295},
      }),
    [dispatch],
  );
export const useSetCurrentDay = (dispatch: AppDispatch) =>
  useCallback(
    (currentDay: string) =>
      dispatch({
        type: appTypes.SET_CURRENT_DAY,
        payload: currentDay,
      }),
    [dispatch],
  );
