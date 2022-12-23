import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../onboarding/styles';

const Button1 = ({
  onPress,
  title,
  style,
}: {
  onPress: any;
  title: string;
  style: any;
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.center, style]}
      onPress={() => onPress()}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button1;
