import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../onboarding/styles';

const Button = ({onPress, title}: {onPress: any; title: string}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.center]}
      onPress={() => onPress()}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
