import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const DEFAULT_STACK_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

export const GLOBAL_NAVIGATION_STACK_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  gestureEnabled: false,
  animationTypeForReplace: 'push',
};
