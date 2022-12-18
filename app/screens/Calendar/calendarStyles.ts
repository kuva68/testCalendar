import {StyleSheet} from 'react-native';

import {scaledSize, scaledY} from '../../utils';

import {COLORS} from '../../utils/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  headerView: {
    height: scaledY(100),
    paddingVertical: scaledY(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendar: {
    marginBottom: scaledY(30),
  },
  day: {
    height: scaledY(60),
    width: scaledSize(40),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  today: {
    color: COLORS.WHITE,
    fontWeight: '600',
  },
  activeView: {
    backgroundColor: COLORS.ROYAL_BLUE,
    borderRadius: 4,
  },
  iconView: {
    height: scaledY(24),
  },
  todayView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaledSize(20),
  },
  weather: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temp: {
    marginRight: scaledSize(20),
    fontSize: scaledSize(12),
  },
});
