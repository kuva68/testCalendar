import {StyleSheet} from 'react-native';

import {scaledSize, scaledY} from '../../utils';

import {COLORS} from '../../utils/colors';

export default StyleSheet.create({
  fiveFlat: {
    width: scaledSize(375),
    alignSelf: 'center',
  },
  fiveDayFlatItem: {
    borderBottomColor: '#e6e6e6',
    width: scaledSize(375),
    borderBottomWidth: 1,
    backgroundColor: COLORS.WHITE,
  },
  touchable: {
    flexDirection: 'row',
    width: scaledSize(375),
    paddingHorizontal: scaledY(25),
    justifyContent: 'space-between',
    paddingVertical: scaledY(20),
  },
  rightitemView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView: {
    marginLeft: scaledSize(20),
  },
  animated: {
    overflow: 'hidden',

    backgroundColor: COLORS.ROYAL_BLUE,
  },
  textView: {
    flexDirection: 'row',
    marginTop: scaledY(10),
    width: scaledSize(150),
    justifyContent: 'space-between',
    marginHorizontal: scaledSize(25),
  },
  center: {
    textAlign: 'right',
  },
});
