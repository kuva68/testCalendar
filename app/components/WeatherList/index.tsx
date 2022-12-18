import React from 'react';
import {FlatList, View} from 'react-native';

import styles from './weatherListStyles';
import {Text} from '../Text';
import dayjs from 'dayjs';
import {getIconColor, getIconName} from '../../utils/helpers';
import {IWeatherList} from '../../services/api/apiTypes';
import {Icon} from '../Icon';

export const WeatherList = ({data}: {data: IWeatherList[]}) => {
  const renderItem = ({item}: {item: IWeatherList}) => {
    return (
      <View style={styles.flatListHourView} key={item.dt_txt}>
        <Text style={[styles.white]} allowFontScaling={false}>
          {`${dayjs(item?.dt_txt).format('H')}`}
        </Text>
        <Text style={[styles.white]} allowFontScaling={false}>
          {`${Math.round(item?.main?.temp - 274)} ℃`}
        </Text>
        <Icon
          name={getIconName(item.weather[0].description)}
          size={24}
          color={getIconColor(item.weather[0].description)}
        />
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: IWeatherList) => item.dt_txt}
      renderItem={renderItem}
      data={data}
      style={styles.flat}
    />
  );
};
