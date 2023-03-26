import React, {useRef} from 'react';
import Swiper from 'react-native-swiper';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Platform,
  Animated,
  ColorValue,
} from 'react-native';

import styles from './weatherStyles';
import {WeatherScreenProps} from './weatherProps';
import {Header, FiveDayComponent, OneDayComponent} from '../../components';
import {COLORS} from '../../utils/colors';
import {scaledSize} from '../../utils';

export const WeatherScreen: React.FC<WeatherScreenProps> = ({navigation}) => {
  const onBackPress = () => navigation.goBack();

  const ref = useRef<Swiper>(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const onPress = (i: number) => {
    ref?.current?.scrollTo(i, true);
  };
  const mValue = Animated.multiply(scaledSize(160) / scaledSize(375), scrollX);

  const bgColor: ColorValue = scrollX.interpolate({
    inputRange: [0, scaledSize(375)],
    outputRange: [COLORS.ROYAL_BLUE, COLORS.PRIMARY],
  });

  const animatedOpacity = scrollX.interpolate({
    inputRange: [0, scaledSize(376)],
    outputRange: [1, 0.6],
  });

  const animatedWidth = scrollX.interpolate({
    inputRange: [0, 200, scaledSize(375)],
    outputRange: [scaledSize(75), scaledSize(120), scaledSize(75)],
  });

  return (
    <SafeAreaView style={[styles.root]}>
      <StatusBar backgroundColor={bgColor} barStyle="light-content" />
      {Platform.OS === 'ios' && (
        <Animated.View
          style={[
            styles.bottomWhite,
            {
              backgroundColor: bgColor,
            },
          ]}
        />
      )}
      <Header
        onBackPress={onBackPress}
        backLabel="Back"
        style={[
          styles.header,
          {
            backgroundColor: bgColor,
          },
        ]}
        isWhite={true}
      />
      <Animated.View
        style={[
          styles.switcher,
          {
            backgroundColor: bgColor,
          },
        ]}>
        <TouchableOpacity onPress={() => onPress(0)}>
          <Animated.Text
            style={[
              styles.white,
              {
                opacity: animatedOpacity,
              },
            ]}>
            One day
          </Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPress(1)}>
          <Animated.Text
            style={[
              styles.white,
              {
                opacity: animatedOpacity,
              },
            ]}>
            Five day
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.switcherBottom,
          {
            backgroundColor: bgColor,
          },
        ]}>
        <Animated.View
          style={[
            styles.dot,
            styles.activeDot,
            {
              transform: [{translateX: mValue}],
              width: animatedWidth,
            },
          ]}
        />
      </Animated.View>
      <Swiper
        showsButtons={false}
        loop={false}
        showsPagination={false}
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
        <OneDayComponent
          style={{
            backgroundColor: bgColor,
          }}
        />
        <FiveDayComponent />
      </Swiper>
    </SafeAreaView>
  );
};
