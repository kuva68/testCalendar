import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';

import presets from './textPresets';
import {ITextProps} from './textProps';

export const Text: React.FC<ITextProps> = ({style, preset, ...rest}) => {
  const styles = [presets[preset || 'default'], style];

  return <ReactNativeText {...rest} style={styles} />;
};
