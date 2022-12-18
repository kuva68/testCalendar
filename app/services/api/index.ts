import {ApiResponse, create} from 'apisauce';
import {ILocation} from '../../utils/types';

const naviMonitor = (response: ApiResponse<any, any>) =>
  console.log('hey!  listen! ', response);
const API_URL = 'https://open-weather13.p.rapidapi.com/city';

const api = create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'X-RapidAPI-Key': '52ead0a69cmsh09c23204e08e131p14194fjsn0fdf6c8a0188',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
  },
});
api.addMonitor(naviMonitor);
export const apiInstance = {
  city: (city: ILocation) => api.get(`latlon/${city.lat}/${city.lon}`),
  fiveDays: (location: ILocation) =>
    api.get(`/fivedaysforcast/${location.lat}/${location.lon}`),
};
