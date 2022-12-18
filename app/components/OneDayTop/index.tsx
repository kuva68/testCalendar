import React from 'react';
import dayjs from 'dayjs';
import {View} from 'react-native';

import styles from './oneDayTopStyles';
import {Text} from '..';
import {useCurrentDay, useFiveDay} from '../../redux/app';
import {
  getCurrentDayWeather,
  getCurrentTimeWeather,
  getIconColor,
  getIconName,
  makeOneDay,
} from '../../utils/helpers';
import {IFiveDayResponse, IWeatherList} from '../../services/api/apiTypes';
import {Icon} from '../Icon';
import {scaledY} from '../../utils';

export const OneDayTop = () => {
  const currentDay: string = useCurrentDay();
  const fiveDays: IFiveDayResponse = useFiveDay();
  const oneDay = makeOneDay(fiveDays, currentDay) ?? [];
  const currentTimeWeather = getCurrentTimeWeather(oneDay);

  const currentDayWeather:
    | {day: IWeatherList | null; night: IWeatherList | null}
    | undefined = getCurrentDayWeather(oneDay);

  const dayMax = currentDayWeather?.day?.main?.temp_max
    ? Math.round(currentDayWeather?.day?.main?.temp_max - 274)
    : null;

  const dayMin = currentDayWeather?.night?.main?.temp_min
    ? Math.round(currentDayWeather?.night?.main?.temp_min - 274)
    : null;

  const temp = currentTimeWeather?.main.temp
    ? Math.round(currentTimeWeather?.main.temp - 274)
    : '';

  const filsLike = currentTimeWeather?.main.feels_like
    ? Math.round(currentTimeWeather?.main.feels_like - 274)
    : '';

  return (
    <>
      <Text style={styles.text} allowFontScaling={false} preset="title">
        {dayjs(currentDay).format('D MMMM')}
      </Text>
      <Text style={[styles.text, styles.white]} allowFontScaling={false}>
        {temp ? `${temp} ℃` : ''}
      </Text>
      <View style={styles.currentTimeView}>
        <Text style={[styles.text, styles.white]} allowFontScaling={false}>
          {dayMax && dayMin ? `day ${dayMax} ℃ / night ${dayMin}  ℃` : ''}
        </Text>
        <Icon
          name={getIconName(currentTimeWeather?.weather[0].description)}
          size={scaledY(60)}
          color={getIconColor(currentTimeWeather?.weather[0].description)}
        />
      </View>
      <View style={[styles.currentTimeView]}>
        <Text style={[styles.text, styles.white]} allowFontScaling={false}>
          {filsLike ? `Feels like ${filsLike} ℃` : ''}
        </Text>
        <Text style={[styles.white]} allowFontScaling={false}>
          {`${currentTimeWeather?.weather[0].description}`}
        </Text>
      </View>
      <View style={[styles.divider, styles.whiteDivider]} />
    </>
  );
};
