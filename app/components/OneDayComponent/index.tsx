import React from 'react';
import {Animated, ScrollView, View, ViewStyle} from 'react-native';

import styles from './oneDayComponentStyles';
import {useCurrentDay, useFiveDay} from '../../redux/app';
import {Text} from '../Text';
import {makeOneDay, getCurrentTimeWeather} from '../../utils/helpers';
import {WeatherList} from '../WeatherList';
import {OneDayTop} from '../OneDayTop';
import {IFiveDayResponse} from '../../services/api/apiTypes';

export const OneDayComponent = ({style}: {style: ViewStyle}) => {
  const currentDay: string = useCurrentDay();
  const fiveDays: IFiveDayResponse = useFiveDay();
  const oneDay = makeOneDay(fiveDays, currentDay) ?? [];
  const currentTimeWeather = getCurrentTimeWeather(oneDay);

  return (
    <View style={styles.oneDayView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Animated.View style={[styles.topView, style]}>
          <OneDayTop />
          <WeatherList data={oneDay} />
        </Animated.View>
        <View style={styles.bottomView}>
          <Text style={[styles.text]} allowFontScaling={false}>
            {`Humidity    ${currentTimeWeather?.main.humidity ?? ''}  %`}
          </Text>
          <Text style={[styles.text]} allowFontScaling={false}>
            {`Pressure    ${currentTimeWeather?.main.pressure ?? ''}  bar`}
          </Text>
          <View style={styles.divider} />
          <Text
            style={[styles.text, styles.verticalMargin]}
            allowFontScaling={false}>
            Wind
          </Text>
          <Text style={[styles.text, styles.gigText]} allowFontScaling={false}>
            {`${currentTimeWeather?.wind.speed ?? ''}  `}
            <Text allowFontScaling={false}>m/s</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
