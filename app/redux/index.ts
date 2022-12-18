import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  StoreEnhancer,
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

// Reducers

import {appReducer} from './app';
export const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
const enhancers: StoreEnhancer[] = [
  applyMiddleware(sagaMiddleware),
  applyMiddleware(logger),
];

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export type AppAction = ReturnType<AppDispatch>;
