import {StyleSheet} from 'react-native';
import {scaledSize, scaledY} from '../../utils';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  root: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: scaledSize(375),
    zIndex: 1000,
  },
  between: {justifyContent: 'space-between'},
  headerTitle: {
    fontWeight: '600',
    fontSize: scaledSize(34),
    textAlign: 'center',
  },
  headerColor: {
    color: COLORS.WHITE,
  },
  buttonBack: {
    paddingVertical: scaledY(10),
    paddingLeft: scaledSize(2),
    paddingRight: scaledSize(12),
    width: scaledSize(75),
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textBack: {
    fontWeight: '500',
    fontSize: scaledY(17),
    letterSpacing: scaledSize(0.4),
    color: COLORS.BLACK,
    marginLeft: scaledSize(12),
    lineHeight: scaledY(19),
  },
});

export default styles;
