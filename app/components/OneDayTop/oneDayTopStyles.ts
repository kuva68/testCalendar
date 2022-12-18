import {Platform, StyleSheet} from 'react-native';

import {scaledSize, scaledY} from '../../utils';
import {COLORS} from '../../utils/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
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

  flatlistHourView: {
    //marginLeft: scaledSize(15),
    alignItems: 'center',
    marginBottom: scaledSize(10),
    justifyContent: 'space-between',
    height: scaledSize(90),
    width: scaledSize(47),
  },
  flat: {
    width: scaledSize(375),
  },

  whiteDivider: {
    backgroundColor: COLORS.WHITE,
    marginVertical: scaledY(30),
  },

  header: {
    backgroundColor: COLORS.ROYAL_BLUE,
    marginTtop: Platform.OS === 'android' ? 0 : scaledY(-100),
  },
  switcher: {
    width: scaledSize(375),
    justifyContent: 'space-between',
    paddingHorizontal: scaledSize(80),
    backgroundColor: COLORS.ROYAL_BLUE,
    flexDirection: 'row',
    height: scaledY(50),
    alignItems: 'center',
  },
  accent: {
    fontWeight: '800',
    textShadowRadius: 3,
  },
  switcherDark: {backgroundColor: '#4682b4'},
  bottomWhite: {
    height: scaledY(60),
    backgroundColor: COLORS.ROYAL_BLUE,
    zIndex: -1,
    marginTop: -60,
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
});
