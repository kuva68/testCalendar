import {StyleSheet} from 'react-native';

import {scaledSize, scaledY} from '../../utils';

import {COLORS} from '../../utils/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.ROYAL_BLUE,
  },
  header: {
    backgroundColor: COLORS.ROYAL_BLUE,
  },
  item: {
    width: scaledSize(100),
    height: scaledSize(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.RED_LIGHT,
    marginBottom: scaledY(30),
    borderRadius: 7,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: scaledY(30),
    paddingHorizontal: scaledSize(20),
    justifyContent: 'space-between',

    width: scaledSize(375),
  },
  text: {
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
  },
  drug: {
    position: 'absolute',
  },
  overflow: {overflow: 'visible'},
});
