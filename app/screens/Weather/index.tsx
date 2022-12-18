import React, {useRef, useState} from 'react';
import Swiper from 'react-native-swiper';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Platform,
  Animated,
} from 'react-native';

import styles from './weatherStyles';
import {WeatherScreenProps} from './weatherProps';
import {
  Header,
  Text,
  FiveDayComponent,
  OneDayComponent,
} from '../../components';
import {COLORS} from '../../utils/colors';
import {scaledSize} from '../../utils';

export const WeatherScreen: React.FC<WeatherScreenProps> = ({navigation}) => {
  const onBackPress = () => navigation.goBack();
  const [index, setIndex] = useState<number>(0);
  const ref = useRef<Swiper>(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const onIndexChanged = (i: number) => {
    setIndex(i);
  };

  const onPress = (i: number) => {
    ref?.current?.scrollTo(i, true);
    setIndex(i);
  };
  const mValue = Animated.multiply(scaledSize(375) / scaledSize(160), scrollX);

  return (
    <SafeAreaView style={[styles.root]}>
      <StatusBar
        backgroundColor={index === 0 ? COLORS.ROYAL_BLUE : '#4682b4'}
        barStyle="light-content"
      />
      {Platform.OS === 'ios' && (
        <View
          style={[styles.bottomWhite, index === 1 && styles.switcherDark]}
        />
      )}
      <Header
        onBackPress={onBackPress}
        backLabel="Back"
        style={[styles.header, index === 1 && styles.switcherDark]}
        isWhite={true}
      />
      <View style={[styles.switcher, index === 1 && styles.switcherDark]}>
        <TouchableOpacity onPress={() => onPress(0)}>
          <Text style={[styles.white, index === 0 && styles.accent]}>
            One day
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPress(1)}>
          <Text style={[styles.white, index === 1 && styles.accent]}>
            Five day
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.switcherBottom,
          index === 1 && styles.switcherBottomDark,
        ]}>
        <Animated.View
          style={[
            styles.dot,
            styles.activeDot,
            {transform: [{translateX: mValue}]},
          ]}
        />
      </View>
      <Swiper
        showsButtons={false}
        loop={false}
        showsPagination={false}
        onIndexChanged={onIndexChanged}
        scrollEventThrottle={1}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ])}
        ref={ref}>
        <OneDayComponent />
        <FiveDayComponent />
      </Swiper>
    </SafeAreaView>
  );
};
