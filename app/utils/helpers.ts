import dayjs from 'dayjs';
import {IFiveDayResponse, IWeatherList} from '../services/api/apiTypes';
import {IIcons} from './types';
import {COLORS} from './colors';

export const getCurrentDayWeather = (oneDay?: IWeatherList[]) => {
  if (oneDay) {
    return oneDay.reduce(
      (accum: {day: null | IWeatherList; night: null | IWeatherList}, item) => {
        if (+dayjs(item.dt_txt).format('H') < 6) {
          return {...accum, night: item};
        } else if (
          +dayjs(item.dt_txt).format('H') > 5 &&
          +dayjs(item.dt_txt).format('H') < 18
        ) {
          return {...accum, day: item};
        } else if (+dayjs(item.dt_txt).format('H') > 18 && !accum?.night) {
          return {...accum, night: item};
        } else {
          return accum;
        }
      },
      {day: null, night: null},
    );
  }
};

const getDiff = (a: number, b: number) => {
  return Math.abs(a - b);
};

export const getCurrentTimeWeather = (oneDays?: IWeatherList[]) => {
  if (oneDays) {
    const currentTime = +dayjs().format('H');
    return oneDays.reduce((accum: IWeatherList, item) => {
      const time = +dayjs(item.dt_txt).format('H');
      if (getDiff(time, currentTime) < 4) {
        return item;
      } else {
        return accum;
      }
    });
  }
};

export const getDateFromFiveDays = (fiveDays: IFiveDayResponse) => {
  const result = fiveDays.list.reduce((accum: any, item) => {
    const date: string = dayjs(item.dt_txt).format('YYYY-MM-DD');

    if (!accum?.[date]) {
      return {
        ...accum,
        [date]: {
          selected: true,
          main: item.weather?.[0].main,
          description: item.weather?.[0].description,
          dt_txt: item.dt_txt,
        },
      };
    } else {
      return accum;
    }
  }, {});
  return result;
};

export const makeOneDay = (
  fiveDays: IFiveDayResponse | null,
  dt_txt: string,
) => {
  if (fiveDays) {
    const result = fiveDays.list.reduce((accum: IWeatherList[], item) => {
      if (
        dayjs(item.dt_txt).format('DDMMYYYY') ===
        dayjs(dt_txt).format('DDMMYYYY')
      ) {
        return [...accum, item];
      } else {
        return accum;
      }
    }, []);
    return result;
  }
};

export const getIconName = (description?: string) => {
  if (description) {
    switch (description.toLowerCase()) {
      case 'overcast clouds':
        return IIcons.cloudy;
      case 'scattered clouds':
      case 'few clouds':
        return IIcons.partly_cloudy_day;
      case 'rain':
        return IIcons.rainy;
      default:
        return IIcons.wb_sunny;
    }
  } else {
    return IIcons.wb_sunny;
  }
};

export const getIconColor = (description?: string) => {
  if (description) {
    switch (description.toLowerCase()) {
      case 'overcast clouds':
        return COLORS.BlACK_R;
      case 'scattered clouds':
      case 'few clouds':
        return '#ffa500';
      case 'rain':
        return '#ffa500';
      default:
        return '#ffa500';
    }
  } else {
    return '#ffa500';
  }
};

export const makeFiveDayWeatherData = (fiveDay: IWeatherList[]) => {
  return fiveDay.reduce((accum: {[id: string]: IWeatherList[]}, item) => {
    const date = dayjs(item.dt_txt).format('YYYY-MM-DD 00:00');
    if (!accum[date]) {
      accum[date] = [item];
    } else {
      accum[date].push(item);
    }
    return accum;
  }, {});
};
