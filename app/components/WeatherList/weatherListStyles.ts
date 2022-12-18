import {StyleSheet} from 'react-native';

import {scaledSize, scaledY} from '../../utils';

import {COLORS} from '../../utils/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  oneDayView: {
    width: scaledSize(375),
  },
  text: {
    marginVertical: scaledY(10),
    marginHorizontal: scaledSize(20),
  },
  white: {
    color: COLORS.WHITE,
    textShadowColor: COLORS.ROYAL_BLUE,
    textShadowOffset: {width: 1, height: 1},
  },
  currentTimeView: {
    flexDirection: 'row',
    marginRight: scaledSize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    paddingBottom: scaledY(60),
  },
  gigText: {
    fontSize: scaledY(40),
  },
  topView: {
    width: scaledSize(375),
    backgroundColor: COLORS.ROYAL_BLUE,
  },
  bottomView: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'flex-start',
  },
  verticalMargin: {
    marginVertical: scaledY(30),
  },
  flatlistHourView: {
    alignItems: 'center',
    marginBottom: scaledSize(10),
    justifyContent: 'space-between',
    height: scaledSize(90),
    width: scaledSize(47),
  },
  flat: {
    marginTop: scaledY(10),
    alignSelf: 'center',
  },
  divider: {
    width: scaledSize(375),
    backgroundColor: COLORS.BlACK_R,
    height: 1,
    marginVertical: scaledY(20),
  },
  whiteDivider: {
    backgroundColor: COLORS.WHITE,
    marginVertical: scaledY(30),
  },
});
