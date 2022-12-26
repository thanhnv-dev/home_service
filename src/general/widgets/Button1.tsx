import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../onboarding/styles';

const Button1 = ({
  onPress,
  title,
  style,
  disabled,
}: {
  onPress: any;
  title: string;
  style: any;
  disabled: boolean;
}) => {
  return (
    <TouchableOpacity
      disabled={disabled ? disabled : false}
      style={[styles.button, styles.center, style]}
      onPress={() => onPress()}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button1;
