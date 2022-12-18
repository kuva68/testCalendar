import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import dayjs from 'dayjs';

import {Text} from '../../components';
import styles from './calendarStyles';
import {CalendarScreenProps} from './calendarProps';
import {IDate, IIcons, IMarkedData} from '../../utils/types';
import {Icon} from '../../components';
import {useSetCurrentDay, useFiveDay, useGetFiveDay} from '../../redux/app';
import {
  getDateFromFiveDays,
  getCurrentDayWeather,
  makeOneDay,
} from '../../utils/helpers';
import {COLORS} from '../../utils/colors';
import {IFiveDayResponse} from '../../services/api/apiTypes';
import {IWeatherList} from '../../services/api/apiTypes';

export const CalendarScreen: React.FC<CalendarScreenProps> = ({navigation}) => {
  const [dates, setDates] = useState({});
  const dispatch = useDispatch();
  const getFiveDay = useGetFiveDay(dispatch);
  const fiveDay: IFiveDayResponse | null = useFiveDay();
  const setCurrentDay = useSetCurrentDay(dispatch);
  const oneDay = makeOneDay(fiveDay, dayjs().format()) ?? [];

  const currentDayWeather:
    | {
        day: IWeatherList | null;
        night: IWeatherList | null;
      }
    | undefined = getCurrentDayWeather(oneDay);

  useEffect(() => {
    getFiveDay();
  }, [getFiveDay]);

  useEffect(() => {
    if (fiveDay) {
      const dayObject: {[id: string]: IMarkedData} =
        getDateFromFiveDays(fiveDay);
      if (dayObject) {
        setDates(dayObject);
      }
    }
  }, [fiveDay]);

  const RenderHeader = ({date}: {date: string}) => {
    return (
      <View style={styles.headerView}>
        <Text preset="title">{dayjs(date).format('MMMM')}</Text>
        <Text>{dayjs(date).format('YYYY')}</Text>
      </View>
    );
  };

  const getIcon = (description: string) => {
    switch (description.toLowerCase()) {
      case 'overcast clouds':
        return <Icon name={IIcons.cloudy} color={COLORS.BlACK_R} size={20} />;
      case 'scattered clouds':
      case 'few clouds':
        return (
          <Icon name={IIcons.partly_cloudy_day} color="#ffa500" size={20} />
        );
      case 'rain':
        return <Icon name={IIcons.rainy} color="#ffa500" size={20} />;
      default:
        return <Icon name={IIcons.wb_sunny} color="#ffa500" size={20} />;
    }
  };

  const DayComponent = ({
    date,
    marking,
  }: {
    date?: IDate;
    marking?: IMarkedData;
  }) => {
    const today = dayjs().format('YYYY-MM-DD');

    const onDayPress = () => {
      if (marking?.dt_txt) {
        setCurrentDay(marking.dt_txt);
        navigation.navigate('Weather');
      }
    };

    return (
      <TouchableOpacity
        onPress={onDayPress}
        style={[styles.day, today === date?.dateString && styles.activeView]}>
        <View style={styles.iconView}>
          {marking && getIcon(marking.description)}
        </View>
        <Text style={[date?.dateString === today && styles.today]}>
          {date?.day ?? ''}
        </Text>
      </TouchableOpacity>
    );
  };

  const max = currentDayWeather?.day?.main?.temp_max
    ? Math.round(currentDayWeather?.day?.main?.temp_max - 274)
    : '';

  const min = currentDayWeather?.night?.main?.temp_min
    ? Math.round(currentDayWeather?.night?.main?.temp_min - 274)
    : '';

  const description = fiveDay?.list?.[0].weather?.[0]?.description ?? '';

  return (
    <SafeAreaView style={styles.root}>
      <Calendar
        markedDates={dates}
        minDate={new Date().toISOString()}
        monthFormat={'yyyy MM'}
        renderHeader={(date: string) => <RenderHeader date={date} />}
        enableSwipeMonths={true}
        style={styles.calendar}
        displayLoadingIndicator
        dayComponent={({date, marking}) => (
          <DayComponent date={date} marking={marking} />
        )}
      />
      <View style={styles.todayView}>
        <Text>{`${fiveDay?.city?.name ?? ''}`}</Text>
        <View style={styles.weather}>
          <Text style={styles.temp}>{`${max} ℃ / ${min} ℃`}</Text>
          {description && getIcon(description)}
        </View>
      </View>
    </SafeAreaView>
  );
};
