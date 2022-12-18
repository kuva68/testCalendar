import {put, takeLatest} from 'redux-saga/effects';

import {apiInstance} from '../services/api';
import alert from '../services/alert';
import {appActionCreators} from '../redux/app';
import {ILocation} from '../utils/types';
import {
  IApiResponse,
  ICityResponse,
  IFiveDayResponse,
} from '../services/api/apiTypes';
import {appTypes} from '../redux/app/types';
import {IAction} from '../redux/IAction';

function* getCity({payload}: {payload: ILocation}) {
  try {
    const cityResponse: IApiResponse<ICityResponse> = yield apiInstance.city(
      payload,
    );
    if (cityResponse.ok && cityResponse.data) {
      yield put(appActionCreators.citySuccess(cityResponse.data));
    } else {
      yield put(appActionCreators.cityFailure());
      alert.error('', 'Network Error');
    }
  } catch (error) {
    yield put(appActionCreators.cityFailure());
    alert.error('', error ?? 'Network Error');
  }
}
function* getFiveDay({payload}: {payload: ILocation}) {
  try {
    const fiveDayResponse: IApiResponse<IFiveDayResponse> =
      yield apiInstance.fiveDays(payload);
    if (fiveDayResponse.ok && fiveDayResponse.data) {
      yield put(appActionCreators.fiveDaySuccess(fiveDayResponse.data));
    } else {
      yield put(appActionCreators.fiveDayFailure());
      alert.error('', 'Network Error');
    }
  } catch (error) {
    yield put(appActionCreators.fiveDayFailure());
    alert.error('', error ?? 'Network Error');
  }
}
export function* appSaga() {
  yield takeLatest<IAction<ILocation>>(appTypes.CITY, getCity);
  yield takeLatest<IAction<ILocation>>(appTypes.FIVE_DAY, getFiveDay);
}
