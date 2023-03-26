import {useSelector} from 'react-redux';
import {RootState} from '../index';

// Selector hooks
export const useLoader = (loader: string) =>
  useSelector((state: RootState) => state.loaders[loader]);
