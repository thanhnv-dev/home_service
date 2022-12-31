import {Icon} from '@ui-kitten/components';
import styles from '~/general/user/presenter/styles';
import React from 'react';

const EyeIcon = ({color}: {color: any}) => (
  <Icon name="eye-outline" fill={color} style={styles.iconInput} />
);
const EyeOffIcon = ({color}: {color: any}) => (
  <Icon name="eye-off-outline" fill={color} style={styles.iconInput} />
);
const IconEmail = ({color}: {color: any}) => (
  <Icon name="email-outline" fill={color} style={styles.iconInput} />
);
const IconLock = ({color}: {color: any}) => (
  <Icon
    name="lock-outline"
    fill={color}
    styleContainer={styles.colorBorder}
    style={styles.iconInput}
  />
);
const IconBack = () => (
  <Icon name="arrow-back-outline" fill={'#8F9BB3'} style={styles.iconBack} />
);
const IconCheck = () => (
  <Icon name="checkmark-outline" fill="white" style={styles.iconChecked} />
);

export {EyeIcon, EyeOffIcon, IconBack, IconEmail, IconLock, IconCheck};
