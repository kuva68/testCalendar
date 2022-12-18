import React from 'react';
import {ScrollView, View} from 'react-native';

import styles from './oneDayComponentStyles';
import {useCurrentDay, useFiveDay} from '../../redux/app';
import {Text} from '../Text';
import {makeOneDay, getCurrentTimeWeather} from '../../utils/helpers';
import {WeatherList} from '../WeatherList';
import {OneDayTop} from '../OneDayTop';
import {IFiveDayResponse} from '../../services/api/apiTypes';

export const OneDayComponent = () => {
  const currentDay: string = useCurrentDay();
  const fiveDays: IFiveDayResponse = useFiveDay();
  const oneDay = makeOneDay(fiveDays, currentDay) ?? [];
  const currentTimeWeather = getCurrentTimeWeather(oneDay);

  return (
    <View style={styles.oneDayView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.topView}>
          <OneDayTop />
          <WeatherList data={oneDay} />
        </View>
        <View style={styles.bottomView}>
          <Text style={[styles.text]} allowFontScaling={false}>
            {`Humidity    ${currentTimeWeather?.main.humidity}  %`}
          </Text>
          <Text style={[styles.text]} allowFontScaling={false}>
            {`Pressure    ${currentTimeWeather?.main.pressure}  bar`}
          </Text>
          <View style={styles.divider} />
          <Text
            style={[styles.text, styles.verticalMargin]}
            allowFontScaling={false}>
            Wind
          </Text>
          <Text style={[styles.text, styles.gigText]} allowFontScaling={false}>
            {`${currentTimeWeather?.wind.speed}  `}
            <Text allowFontScaling={false}>m/s</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
