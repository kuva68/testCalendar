import React, {useState, useRef} from 'react';
import {Animated, FlatList, TouchableOpacity, View} from 'react-native';

import styles from './fiveDayStyles';
import {useFiveDay} from '../../redux/app';
import {
  makeFiveDayWeatherData,
  getIconName,
  getIconColor,
  getCurrentDayWeather,
} from '../../utils/helpers';
import {WeatherList} from '../WeatherList';
import {Text} from '..';
import dayjs from 'dayjs';
import {Icon} from '../Icon';
import {IWeatherList} from '../../services/api/apiTypes';

export const RenderItem = ({
  item,
  fiveDayWeatherData,
}: {
  item: string;
  fiveDayWeatherData: {[index: string]: IWeatherList[]};
}) => {
  const today = dayjs().format('YYYY-MM-DD 00:00');
  const value = useRef(new Animated.Value(0)).current;

  const animateOpen = () => {
    Animated.timing(value, {
      toValue: 170,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animateClose = () => {
    Animated.timing(value, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const currentDayWeather:
    | {
        day: IWeatherList | null;
        night: IWeatherList | null;
      }
    | undefined = getCurrentDayWeather(fiveDayWeatherData[item]);

  const currentWeather: IWeatherList =
    item === today
      ? fiveDayWeatherData[item][0]
      : fiveDayWeatherData[item][4] ??
        fiveDayWeatherData[item][fiveDayWeatherData[item].length - 1];

  const [open, setOpen] = useState(false);

  const dayMax = currentDayWeather?.day?.main?.temp_max
    ? Math.round(+currentDayWeather?.day?.main?.temp_max - 274)
    : '';

  const dayMin = currentDayWeather?.night?.main?.temp_min
    ? Math.round(currentDayWeather?.night?.main?.temp_min - 274)
    : '';

  const onPress = () => {
    if (open) {
      animateClose();
      setOpen(false);
    } else {
      animateOpen();
      setOpen(true);
    }
  };

  return (
    <View style={styles.fiveDayFlatItem}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View>
          <Text>{dayjs(item).format('dddd, D MM')}</Text>
          <Text>{currentWeather?.weather?.[0]?.description}</Text>
        </View>
        <View style={styles.rightitemView}>
          <Icon
            name={getIconName(currentWeather?.weather?.[0]?.description)}
            size={24}
            color={getIconColor(currentWeather?.weather?.[0]?.description)}
          />
          <View style={styles.rightView}>
            <Text style={styles.center}>{dayMax ? `${dayMax} ℃` : ''}</Text>
            <Text style={styles.center}>{dayMin ? `${dayMin} ℃` : ''}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.animated, {height: value}]}>
        <View style={styles.textView}>
          <Text>Wind</Text>
          <Text>{currentWeather?.wind?.speed}</Text>
        </View>
        <View style={styles.textView}>
          <Text>Humidity</Text>
          <Text>{`${currentWeather?.main?.humidity} %`}</Text>
        </View>
        <WeatherList data={fiveDayWeatherData[item]} />
      </Animated.View>
    </View>
  );
};

export const FiveDayComponent = () => {
  const fiveDays = useFiveDay();

  const fiveDayWeatherData = fiveDays?.list
    ? makeFiveDayWeatherData(fiveDays?.list)
    : {};

  return (
    <FlatList
      style={styles.fiveFlat}
      data={Object.keys(fiveDayWeatherData)}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <RenderItem item={item} fiveDayWeatherData={fiveDayWeatherData} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
