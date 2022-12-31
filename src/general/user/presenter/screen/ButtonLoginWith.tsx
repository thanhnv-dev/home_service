import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '~/general/user/presenter/styles';
import {Text} from '@ui-kitten/components';

export const ButtonLoginWith = (props: any) => {
  return (
    <TouchableOpacity style={[styles.button, styles.center]}>
      <Image source={props.icon} style={styles.icon} />
      <Text style={styles.fs14bold}>{props.title}</Text>
    </TouchableOpacity>
  );
};
