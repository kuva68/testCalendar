import {Platform, Dimensions} from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

const {width, height} = Dimensions.get('window');
const shortDimension = width < height ? width : height;
const longDimensions = width > height ? width : height;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 790;

export const scaledSize = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;

export const scaledY = (size: number) =>
  (longDimensions / guidelineBaseHeight) * size;
