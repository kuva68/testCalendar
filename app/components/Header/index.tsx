import React from 'react';
import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './headerStyles';

export interface HeaderProps {
  title?: string;
  isWhite?: boolean;
  onBackPress?: () => void;
  backLabel?: string;
  style?: ViewStyle;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  isWhite,
  onBackPress,
  backLabel,
  style,
}) => {
  return (
    <View
      style={[styles.root, !!onBackPress && styles.between, style && style]}>
      {onBackPress && (
        <TouchableOpacity style={styles.buttonBack} onPress={onBackPress}>
          {backLabel && (
            <Text
              style={[styles.textBack, isWhite && styles.headerColor]}
              allowFontScaling={false}>
              {backLabel}
            </Text>
          )}
        </TouchableOpacity>
      )}

      <Text
        style={[styles.headerTitle, isWhite && styles.headerColor]}
        allowFontScaling={false}>
        {title}
      </Text>

      {onBackPress && <View style={styles.buttonBack} />}
    </View>
  );
};
