import {FocusedColorBoxPass, FocusedColorBoxEmail} from './function';
import Color from '~/constants/Color';
import {Icon} from '@ui-kitten/components';
import styles from '~/general/user/presenter/styles';
import React from 'react';
// import {} from '~/assets/Icons/';

const EyeIcon = ({focusBox}: {focusBox: any}) => (
  <Icon
    name="eye-outline"
    fill={FocusedColorBoxPass({
      color1: Color.violet,
      color2: Color.grayIcon,
      focusBox: focusBox,
    })}
    style={styles.iconInput}
  />
);
const EyeOffIcon = ({focusBox}: {focusBox: any}) => (
  <Icon
    name="eye-off-outline"
    fill={FocusedColorBoxPass({
      color1: Color.violet,
      color2: Color.grayIcon,
      focusBox: focusBox,
    })}
    style={styles.iconInput}
  />
);
const IconEmail = ({focusBox}: {focusBox: any}) => (
  <Icon
    name="email-outline"
    fill={FocusedColorBoxEmail({
      color1: Color.violet,
      color2: Color.grayIcon,
      focusBox: focusBox,
    })}
    style={styles.iconInput}
  />
);
const IconLock = ({focusBox}: {focusBox: any}) => (
  <Icon
    name="lock-outline"
    fill={FocusedColorBoxPass({
      color1: Color.violet,
      color2: Color.grayIcon,
      focusBox: focusBox,
    })}
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
