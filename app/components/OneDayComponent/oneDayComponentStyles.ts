import {StyleSheet} from 'react-native';

import {scaledSize, scaledY} from '../../utils';
import {COLORS} from '../../utils/colors';

export default StyleSheet.create({
  content: {
    paddingBottom: scaledY(60),
  },

  topView: {
    width: scaledSize(375),
    backgroundColor: COLORS.ROYAL_BLUE,
    paddingBottom: scaledY(15),
  },
  oneDayView: {
    width: scaledSize(375),
  },
  bottomView: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'flex-start',
    paddingTop: scaledY(15),
  },
  verticalMargin: {
    marginVertical: scaledY(10),
  },
  divider: {
    width: scaledSize(375),
    backgroundColor: COLORS.BlACK_R,
    height: 1,
    marginVertical: scaledY(20),
  },
  text: {
    marginVertical: scaledY(10),
    marginHorizontal: scaledSize(20),
  },
  gigText: {
    fontSize: scaledY(40),
  },
});
