import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CalendarScreen, WeatherScreen} from '../screens';
import {GLOBAL_NAVIGATION_STACK_OPTIONS} from './options';

export type RootParams = {
  Calendar: undefined;
  Weather: undefined;
  DrugableList: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={GLOBAL_NAVIGATION_STACK_OPTIONS}
        initialRouteName="Calendar">
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
