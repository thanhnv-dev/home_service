import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../onboarding/styles';

const MyButton = ({
  onPress,
  title,
  style,
  disabled,
}: {
  onPress: any;
  title: string;
  style: any;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, styles.center, style]}
      onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
