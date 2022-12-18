import {createIconSetFromFontello} from 'react-native-vector-icons';
import React from 'react';
import fontelloConfig from '../../config.json';
import {IIcons} from '../../utils/types';
const FontelloIcon = createIconSetFromFontello(fontelloConfig);
export const Icon = ({
  name,
  size,
  color,
}: {
  name: IIcons;
  size: number;
  color: string;
}) => {
  return <FontelloIcon name={name} size={size} color={color} />;
};
