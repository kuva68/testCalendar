import {TextProps as RNTextProps} from 'react-native';
import {TextPreset} from './textPresets';

export interface ITextProps extends RNTextProps {
  preset?: TextPreset;
}
