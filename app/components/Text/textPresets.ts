import {TextStyle, StyleSheet} from 'react-native';

import {COLORS} from '../../utils/colors';

const BASE: TextStyle = {
  color: COLORS.BLACK,
  fontSize: 15,
};

interface ITextStyles {
  default: TextStyle;
  title: TextStyle;
  secondary: TextStyle;
}

export type TextPreset = keyof ITextStyles;

export default StyleSheet.create<ITextStyles>({
  default: BASE,

  title: {
    ...BASE,
    fontSize: 24,
    fontWeight: 'bold',
  },

  secondary: {
    ...BASE,
    fontSize: 11,
  },
});
